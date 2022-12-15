import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof StyledInput>
>(({ ...props }, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

if (process.env.NODE_ENV !== "production") {
  Input.displayName = "Input";
}

export default Input;
