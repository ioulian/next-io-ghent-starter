import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import Label from "../../label/Label";

import { StyledInput } from "./../../input/Input.styles";
import { StyledCheckbox } from "./Checkbox.styles";

const Checkbox = forwardRef<
  HTMLInputElement,
  { inputValue: string } & InferComponentProps<typeof StyledInput>
>(
  (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      name,
      inputValue,
      children,
      ...props
    },
    ref
  ) => {
    const linkedId = `${name}-${inputValue}`;
    return (
      <StyledCheckbox>
        <StyledInput
          {...props}
          name={name}
          type="checkbox"
          id={linkedId}
          ref={ref}
          value={inputValue}
        />
        <Label htmlFor={linkedId}>{children}</Label>
      </StyledCheckbox>
    );
  }
);

if (process.env.NODE_ENV !== "production") {
  Checkbox.displayName = "Checkbox";
}

export default Checkbox;
