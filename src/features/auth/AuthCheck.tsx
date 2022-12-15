import { FC } from "react";

import { useAuthCheck } from "./utilities";

const AuthCheck: FC<{
  requireAuth?: boolean;
}> = ({ requireAuth }) => {
  useAuthCheck(requireAuth);
  return null;
};

export default AuthCheck;
