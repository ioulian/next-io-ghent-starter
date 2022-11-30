import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "../input/Input.styles";

export const SingleCheckbox = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof StyledInput>
>(({ ...props }, ref) => {
  return <StyledInput {...props} type="checkbox" ref={ref} />;
});

SingleCheckbox.displayName = "SingleCheckbox";
