import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useAuth } from "./authSlice";

export const AuthCheck: FC<{
  /**
   * If this param is given, it will redirect user to another page (login for
   * example). Otherwise, only children will not be shown if not logged in.
   */
  redirectTo?: string;

  /**
   * You can disable this on login page for example.
   */
  check?: boolean;
  children: ReactNode;
}> = ({ redirectTo, check = true, children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (check && !isLoggedIn) {
    if (redirectTo) {
      router.push(redirectTo);
    }

    return null;
  }

  return <>{children}</>;
};
