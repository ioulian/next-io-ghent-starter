import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "../input/Input.styles";

import { StyledToggle } from "./Toggle.styles";

const Toggle = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof StyledInput>
>(({ ...props }, ref) => {
  // We set aria-hidden to true, as we have another label for that element
  return (
    <StyledToggle>
      <StyledInput {...props} type="checkbox" ref={ref} />
      <label htmlFor={props.id} aria-hidden="true"></label>
    </StyledToggle>
  );
});

if (process.env.NODE_ENV === "development") {
  Toggle.displayName = "Toggle";
  Toggle.whyDidYouRender = true;
}

export default Toggle;