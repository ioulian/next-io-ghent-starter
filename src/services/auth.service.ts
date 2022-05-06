import { apiToJson, getContentTypeHeaders } from "./api.service";

const LOCAL_STORAGE_KEY: string = process.env.NEXT_PUBLIC_AUTH_KEY;
const LOCAL_STORAGE_REMEMBER_ME_KEY: string =
  process.env.NEXT_PUBLIC_AUTH_REMEMBER_KEY;

export interface AuthTokens {
  token: string;
  refresh_token: string;
}

export const login = (email: string, password: string): Promise<AuthTokens> => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_AUTH_LOGIN_URL}`,
      {
        method: "POST",
        headers: {
          ...getContentTypeHeaders(),
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )
      .then(apiToJson(reject, false))
      .then(async (body) => {
        const { token, refresh_token } = body as unknown as AuthTokens;
        if (!token || !refresh_token) {
          reject(
            new Error("No refresh token received, please try again later.")
          );
          return;
        }

        resolve(body as unknown as AuthTokens);
      })
      .catch(reject);
  });
};

export const refreshToken = ({
  refresh_token,
}: AuthTokens): Promise<AuthTokens> => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_AUTH_REFRESH_URL}`,
      {
        method: "POST",
        headers: {
          ...getContentTypeHeaders(),
        },
        body: JSON.stringify({
          refresh_token,
        }),
      }
    )
      .then(apiToJson(reject, true))
      .then((body) => {
        const { token, refresh_token } = body as unknown as AuthTokens;
        if (!token || !refresh_token) {
          reject(
            new Error("No refresh token received, please try again later.")
          );
          return;
        }

        resolve(body as unknown as AuthTokens);
      })
      .catch((e) => {
        logout();
        reject(e);
      });
  });
};

export const getAuthTokens = (): AuthTokens | undefined => {
  const item = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (typeof item === "string") {
    return JSON.parse(item);
  }

  return undefined;
};

export const setAuthTokens = (tokens: AuthTokens) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tokens));
};

export const getRememberMe = () => {
  const localValue = localStorage.getItem(LOCAL_STORAGE_REMEMBER_ME_KEY);

  if (typeof localValue === "string") {
    return JSON.parse(localValue);
  }

  return false;
};

export const setRememberMe = (remember: boolean) => {
  localStorage.setItem(LOCAL_STORAGE_REMEMBER_ME_KEY, JSON.stringify(remember));
};

export const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  localStorage.removeItem(LOCAL_STORAGE_REMEMBER_ME_KEY);
};

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decodedJwt = parseJwt(token);
  return decodedJwt.exp * 1000 < Date.now();
};
