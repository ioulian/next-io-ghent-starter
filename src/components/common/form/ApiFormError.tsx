import { FC } from "react";

import { ApiError } from "@/types/error";

export const ApiFormError: FC<{ error: ApiError }> = ({ error }) => {
  return <div>{error.title && <p>{error.title}</p>}</div>;
};
