import { FC } from "react";

import { ApiError } from "@/types/error";

const ApiFormError: FC<{ error: ApiError }> = ({ error }) => {
  return <div>{error.title && <p>{error.title}</p>}</div>;
};

if (process.env.NODE_ENV === "development") {
  ApiFormError.whyDidYouRender = true;
}

export default ApiFormError;
