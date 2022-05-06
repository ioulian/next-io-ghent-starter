import {
  getAuthTokens,
  getRememberMe,
  isTokenExpired,
  logout,
  refreshToken,
  setAuthTokens,
} from "./auth.service";

export type API_REQUEST_STATUS = "idle" | "loading" | "succeeded" | "failed";

export const getContentTypeHeaders = (): { [key: string]: string } => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export const getAuthHeaders = async (): Promise<{ [key: string]: string }> => {
  let tokens = getAuthTokens();

  if (tokens && tokens.token) {
    const tokenExpired = isTokenExpired(tokens.token);

    if (tokenExpired) {
      const rememberMe = getRememberMe();
      if (!rememberMe) {
        logout();
        return {};
      }

      tokens = await refreshToken(tokens);
      setAuthTokens(tokens);
    }

    return { Authorization: `Bearer ${tokens.token}` };
  } else {
    return {};
  }
};

export const apiToJson =
  (reject: (reason?: any) => void, redirectOn401: boolean = true) =>
  (res: Response) =>
    res.json().then((json) => {
      if (!res.ok) {
        if (json.code === 401 && redirectOn401) {
          logout();
          return;
        }

        reject(
          new Error(
            (json?.detail || json?.message || json?.title) ??
              "Error had occured, try again later"
          )
        );
        return;
      }

      return json;
    });
