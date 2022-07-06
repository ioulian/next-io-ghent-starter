import {
  logout,
  selectAuthTokens,
  setTokens,
} from "../features/auth/authSlice";
import { AppStore } from "../store/store";
import { isTokenExpired, refreshTokens } from "./../features/auth/api";

export type API_REQUEST_STATUS = "idle" | "loading" | "succeeded" | "failed";

export const getContentTypeHeaders = (): { [key: string]: string } => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const getAuthHeaders = async (
  store: AppStore
): Promise<{ [key: string]: string }> => {
  let tokens = selectAuthTokens(store.getState());

  if (tokens && tokens.access_token) {
    const tokenExpired = isTokenExpired(tokens.access_token);

    if (tokenExpired) {
      tokens = await refreshTokens(tokens);
      store.dispatch(setTokens(tokens));
    }

    return { Authorization: `Bearer ${tokens.access_token}` };
  } else {
    return {};
  }
};

export const apiToJson =
  <T = any>() =>
  (res: Response): Promise<T> =>
    res.ok
      ? res.json()
      : new Promise((resolve, reject) => {
          reject(res.status);
        });

export const getFetcher =
  <T = any>() =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const res = await fetch(...args);
    return apiToJson<T>()(res);
  };

export const getAuthFetcher =
  <T = any>(store: AppStore) =>
  async (...args: [input: RequestInfo, init?: RequestInit]) => {
    const [input, init] = args;
    const newInit = await injectHeaders(store, init);
    return getFetcher<T>()(input, newInit).catch((err: number) => {
      if (err === 401) {
        store.dispatch(logout());
      }
    });
  };

const injectHeaders = async (
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
    ...toReturn.headers,
    ...getContentTypeHeaders(),
    ...(await getAuthHeaders(store)),
  };

  return toReturn;
};
