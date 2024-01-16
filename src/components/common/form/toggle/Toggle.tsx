import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledInput } from "../input/Input.styles";

import { StyledToggle } from "./Toggle.styles";

const Toggle = forwardRef<
  HTMLInputElement,
  Omit<InferComponentProps<typeof StyledInput>, "children">
>(({ ...props }, ref) => {
  // We set aria-hidden to true, as we have another label for that element
  return (
    <StyledToggle>
      <StyledInput {...props} type="checkbox" ref={ref} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={props.id} aria-hidden="true" />
    </StyledToggle>
  );
});

if (process.env.NODE_ENV === "development") {
  Toggle.displayName = "Toggle";
  Toggle.whyDidYouRender = true;
}

export default memo(Toggle);
