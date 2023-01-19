import { forwardRef, ReactNode } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput, StyledInputIconContainer } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  { iconBefore?: ReactNode } & InferComponentProps<typeof StyledInput>
>(({ iconBefore, ...props }, ref) => {
  if (iconBefore && !["checkbox", "radio"].includes(props.type ?? "")) {
    return (
      <StyledInputIconContainer>
        {iconBefore}
        <StyledInput {...props} ref={ref} />
      </StyledInputIconContainer>
    );
  }
  return <StyledInput {...props} ref={ref} />;
});

if (process.env.NODE_ENV === "development") {
  Input.displayName = "Input";
  Input.whyDidYouRender = true;
}

export default Input;
