import { forwardRef, memo, ReactNode } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput, StyledInputIconContainer } from "./Input.styles";

const Input = forwardRef<
  HTMLInputElement,
  { iconBefore?: ReactNode; iconAfter?: ReactNode } & InferComponentProps<
    typeof StyledInput
  >
>(({ iconBefore, iconAfter, ...props }, ref) => {
  if (
    (iconBefore || iconAfter) &&
    !["checkbox", "radio"].includes(props.type ?? "")
  ) {
    return (
      <StyledInputIconContainer>
        {iconBefore}
        <StyledInput {...props} ref={ref} />
        {iconAfter}
      </StyledInputIconContainer>
    );
  }
  return <StyledInput {...props} ref={ref} />;
});

if (process.env.NODE_ENV === "development") {
  Input.displayName = "Input";
  Input.whyDidYouRender = true;
}

export default memo(Input);
