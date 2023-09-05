import { FC, memo } from "react";
import isEqual from "lodash/isEqual";

import { ApiError } from "@/types/error";

const ApiFormError: FC<{ error: ApiError }> = ({ error }) => {
  return <div>{error.title ? <p>{error.title}</p> : null}</div>;
};

if (process.env.NODE_ENV === "development") {
  ApiFormError.whyDidYouRender = true;
}

export default memo(ApiFormError, isEqual);
