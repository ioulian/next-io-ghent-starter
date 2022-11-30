import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { Label } from "../../label/Label";

import { StyledInput } from "./../../input/Input.styles";
import { StyledRadio } from "./Radio.styles";

export const Radio = forwardRef<
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
      <StyledRadio>
        <StyledInput
          {...props}
          name={name}
          type="radio"
          id={linkedId}
          ref={ref}
          value={inputValue}
        />
        <Label htmlFor={linkedId}>{children}</Label>
      </StyledRadio>
    );
  }
);

Radio.displayName = "Radio";
