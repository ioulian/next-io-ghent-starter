import { useRouter } from "next/router";

import { isClient } from "../../utils/general-utils";
import { AppStore } from "../../store/store";
import {
  emptyProps,
  RequireResult,
  UserLoggedInError,
  UserLoggedOutError,
} from "../../services/serverSideProps.service";

import { selectAuthTokens, useAuth } from "./authSlice";

export const useAuthCheck = (requireAuth?: boolean) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (isClient() && typeof requireAuth === "boolean") {
    // Already logged in
    if (requireAuth === false && isLoggedIn) {
      if (
        typeof router.query.back === "string" &&
        router.query.back.startsWith("/")
      ) {
        router.push(router.query.back);
        return;
      }

      router.push(process.env.NEXT_PUBLIC_AUTH_REDIRECT_IF_LOGGED_IN!);
      return;
    }

    // Should log in
    if (requireAuth === true && !isLoggedIn) {
      router.push(
        `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_IF_LOGGED_OUT}?back=${router.asPath}`,
      );
    }
  }
};

export const redirectToHomepageIfLoggedIn = (
  store: AppStore,
): Promise<RequireResult> =>
  new Promise((resolve, reject) => {
    const tokens = selectAuthTokens(store.getState());
    if (tokens !== null) {
      reject(new UserLoggedInError());
      return;
    }

    resolve({
      result: {
        props: {
          requireAuth: false,
        },
      },
    });
  });

export const redirectToLoginIfLoggedOut = (
  store: AppStore,
): Promise<RequireResult> =>
  new Promise((resolve, reject) => {
    const tokens = selectAuthTokens(store.getState());
    if (tokens === null) {
      reject(new UserLoggedOutError());
      return;
    }

    resolve({
      result: {
        props: {
          requireAuth: true,
        },
      },
    });
  });

export const requireAnonymous = (): Promise<RequireResult> =>
  new Promise((resolve) => {
    resolve({
      result: emptyProps,
    });
  });
