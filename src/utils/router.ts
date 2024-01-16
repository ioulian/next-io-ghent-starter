import { useRouter } from "next/router";

export const useIsActiveRoute = (
  path: string,
  exact: boolean = false,
): boolean => {
  const router = useRouter();

  if (exact) {
    return router.asPath === path;
  }

  return router.asPath.startsWith(path);
};
