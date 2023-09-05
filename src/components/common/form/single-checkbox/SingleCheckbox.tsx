import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "../input/Input.styles";

const SingleCheckbox = forwardRef<
  HTMLInputElement,
  Omit<InferComponentProps<typeof StyledInput>, "children">
>(({ ...props }, ref) => {
  return <StyledInput {...props} type="checkbox" ref={ref} />;
});

if (process.env.NODE_ENV === "development") {
  SingleCheckbox.displayName = "SingleCheckbox";
  SingleCheckbox.whyDidYouRender = true;
}

export default memo(SingleCheckbox);
