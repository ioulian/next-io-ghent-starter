import { FC } from "react";

import { ApiError } from "@/types/error";

const ApiFormError: FC<{ error: ApiError }> = ({ error }) => {
  return <div>{error.title && <p>{error.title}</p>}</div>;
};

export default ApiFormError;
