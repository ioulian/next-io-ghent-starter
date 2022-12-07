import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledLabel } from "./Label.styles";

export const Label: FC<
  {
    as?: keyof JSX.IntrinsicElements;
    required?: boolean;
  } & InferComponentProps<typeof StyledLabel>
> = ({ required, children, ...props }) => {
  return (
    <StyledLabel {...props}>
      {children}
      {required && <span aria-label="(required)">*</span>}
    </StyledLabel>
  );
};
