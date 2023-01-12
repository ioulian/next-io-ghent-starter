import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof StyledInput>
>(({ ...props }, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

if (process.env.NODE_ENV === "development") {
  Input.displayName = "Input";
  Input.whyDidYouRender = true;
}

export default Input;
