import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledLabel } from "./Label.styles";

export const Label: FC<
  { required?: boolean } & InferComponentProps<typeof StyledLabel>
> = ({ required, children, ...props }) => {
  return (
    <StyledLabel {...props}>
      {children}
      {required && <span aria-hidden>*</span>}
    </StyledLabel>
  );
};
