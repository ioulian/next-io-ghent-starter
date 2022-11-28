import {
  logout,
  selectAuthTokens,
  selectIsLoading,
  setIsLoading,
  setTokens,
} from "../features/auth/authSlice";
import { AppStore } from "../store/store";

import { UserLoggedOutError } from "./serverSideProps.service";
import { isTokenExpired, refreshTokens } from "./../features/auth/api";

export type API_REQUEST_STATUS = "idle" | "loading" | "succeeded" | "failed";

export const getContentTypeHeaders = (): { [key: string]: string } => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const getAuthHeaders = (store: AppStore) =>
  new Promise<{ Authorization?: string }>((resolve, reject) => {
    const resolveAuthHeaders = () => {
      const newTokens = selectAuthTokens(store.getState());
      if (newTokens && newTokens.access_token) {
        resolve({
          Authorization: `${newTokens.token_type} ${newTokens.access_token}`,
        });
      } else {
        resolve({});
      }
    };

    const tokens = selectAuthTokens(store.getState());
    if (tokens && tokens.access_token) {
      const tokenExpired = isTokenExpired(tokens.access_token);

      if (tokenExpired) {
        if (!selectIsLoading(store.getState())) {
          store.dispatch(setIsLoading("loading"));

          refreshTokens(tokens)
            .then((tokens) => store.dispatch(setTokens(tokens)))
            .then(() => {
              resolveAuthHeaders();
            })
            .catch(() => {
              store.dispatch(logout());
              reject(new UserLoggedOutError());
            });
        } else {
          const unsubscribe = store.subscribe(() => {
            if (!selectIsLoading(store.getState())) {
              resolveAuthHeaders();
              unsubscribe();
            }
          });
        }
      } else {
        resolve({
          Authorization: `${tokens.token_type} ${tokens.access_token}`,
        });
      }
    } else {
      resolve({});
    }
  });

export const apiToJson =
  <T = any>() =>
  (res: Response): Promise<T> => {
    if (res.ok) {
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        return res.json();
      }

      // Handle empty body
      return new Promise((resolve, reject) => {
        res
          .text()
          .then(() => {
            resolve({} as T);
          })
          .catch(() => {
            reject(res.status.toString());
          });
      });
    }

    return new Promise((resolve, reject) => {
      res
        .json()
        .then((json) => {
          reject(json);
        })
        .catch(() => {
          reject(res.status.toString());
        });
    });
  };

export const getFetcher =
  <T = any>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const res = await fetch(input, init);
    return apiToJson<T>()(res);
  };

export const getAuthFetcher =
  <T = any>(store: AppStore) =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = await injectAuthHeaders(store, init);
    return getFetcher<T>()(input, newInit).catch((err: number) => {
      if (err === 401) {
        store.dispatch(logout());
      } else {
        throw err;
      }
    });
  };

const injectAuthHeaders = async (
  store: AppStore,
  init?: RequestInit
): Promise<RequestInit> => {
  let toReturn: RequestInit = {};

  if (init) {
    toReturn = init;
  }

  if (!toReturn.headers) {
    toReturn.headers = {} as HeadersInit;
  }

  toReturn.headers = {
    ...getContentTypeHeaders(),
    ...(await getAuthHeaders(store)),
    ...toReturn.headers,
  };

  return toReturn;
};
