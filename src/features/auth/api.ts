import { jwtDecode } from "jwt-decode";

import { apiToJson, getContentTypeHeaders } from "./../../services/api.service";

export enum GrantType {
  Password = "password",
  RefreshToken = "refresh_token",
  Facebook = "facebook",
  Google = "google",
}
export interface AuthTokens {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

const genericNoTokensError = "No tokens received, please try again later.";

export const login = (
  username: string,
  password: string,
): Promise<AuthTokens> => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_AUTH_LOGIN_URL}`,
      {
        method: "POST",
        headers: {
          ...getContentTypeHeaders(),
        },
        body: JSON.stringify({
          grant_type: GrantType.Password,
          username,
          password,
          client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET,
        }),
      },
    )
      .then(apiToJson())
      .then(async (body) => {
        const { access_token, refresh_token } = body as unknown as AuthTokens;
        if (!access_token || !refresh_token) {
          reject(new Error(genericNoTokensError));
          return;
        }

        resolve(body as unknown as AuthTokens);
      })
      .catch(reject);
  });
};

export const loginSocial = (
  grantType: GrantType,
  token: string,
): Promise<AuthTokens> => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_AUTH_LOGIN_URL}`,
      {
        method: "POST",
        headers: {
          ...getContentTypeHeaders(),
        },
        body: JSON.stringify({
          grant_type: grantType,
          access_token: token,
          client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET,
        }),
      },
    )
      .then(apiToJson())
      .then(async (body) => {
        const { access_token } = body as unknown as AuthTokens;
        if (!access_token) {
          reject(new Error(genericNoTokensError));
          return;
        }

        resolve(body as unknown as AuthTokens);
      })
      .catch(reject);
  });
};

export const refreshTokens = ({
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
          grant_type: GrantType.RefreshToken,
          refresh_token,
          client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET,
        }),
      },
    )
      .then(apiToJson())
      .then((body) => {
        const { access_token, refresh_token } = body as unknown as AuthTokens;
        if (!access_token || !refresh_token) {
          reject(new Error(genericNoTokensError));
          return;
        }

        resolve(body as unknown as AuthTokens);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwtDecode(token);
  const expiresIn = decoded.exp ?? 1 * 1000;

  // We add 2 seconds of overlay to make sure we refresh token before doing the request
  return expiresIn - new Date().getTime() - 2000 <= 0;
};
