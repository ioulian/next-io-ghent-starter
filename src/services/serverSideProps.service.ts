import { ServerResponse } from "http";

import { GetServerSidePropsResult } from "next";

import { logout } from "../features/auth/authSlice";
import { AppStore } from "../store/store";

export class UserLoggedOutError extends Error {}
export class UserLoggedInError extends Error {}
export class NotFoundError extends Error {}

export type RequireResult<T = unknown> = {
  result: GetServerSidePropsResult<{ [key: string]: unknown }>;
  response?: T;
};

export const emptyProps = { props: {} };
export const emptyRequireResult = { result: { props: {} }, response: {} };

export const catchServerSideProps =
  (
    resolve: (
      value: RequireResult["result"] | PromiseLike<RequireResult["result"]>,
    ) => void,
    reject: (err: Error) => void,
    store: AppStore,
    resolvedUrl: string,
    res: ServerResponse,
  ) =>
  (err: unknown) => {
    console.log(err);
    if (err instanceof UserLoggedOutError) {
      store.dispatch(logout());
      resolve({
        redirect: {
          permanent: false,
          destination: `${process.env
            .NEXT_PUBLIC_AUTH_REDIRECT_IF_LOGGED_OUT!}?back=${resolvedUrl}`,
        },
      });
    } else if (err instanceof UserLoggedInError) {
      resolve({
        redirect: {
          permanent: false,
          destination: process.env.NEXT_PUBLIC_AUTH_REDIRECT_IF_LOGGED_IN!,
        },
      });
    } else if (err instanceof NotFoundError) {
      resolve({
        notFound: true,
      });
    } else {
      res.statusCode = 500;
      reject(new Error("Internal Server Error"));
    }
  };
