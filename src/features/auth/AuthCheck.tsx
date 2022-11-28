import { FC } from "react";

import { useAuthCheck } from "./utilities";

export const AuthCheck: FC<{
  requireAuth?: boolean;
}> = ({ requireAuth }) => {
  useAuthCheck(requireAuth);
  return null;
};
