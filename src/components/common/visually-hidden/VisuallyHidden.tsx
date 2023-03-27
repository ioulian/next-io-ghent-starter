import { FC, memo } from "react";
import isEqual from "lodash/isEqual";

import { InferComponentProps } from "@/types/styled";

import { StyledVisuallyHidden } from "./VisuallyHidden.styles";

const VisuallyHidden: FC<
  { as?: keyof JSX.IntrinsicElements } & InferComponentProps<
    typeof StyledVisuallyHidden
  >
> = (props) => {
  return <StyledVisuallyHidden {...props} />;
};

if (process.env.NODE_ENV === "development") {
  VisuallyHidden.whyDidYouRender = true;
}

export default memo(VisuallyHidden, isEqual);
