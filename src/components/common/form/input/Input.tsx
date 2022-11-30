import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "./Input.styles";

export const Input = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof StyledInput>
>(({ ...props }, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.displayName = "Input";
