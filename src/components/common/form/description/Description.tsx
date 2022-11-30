import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledDescription } from "./Description.styles";

export const Description: FC<
  { id: string } & InferComponentProps<typeof StyledDescription>
> = ({ id, children, ...props }) => {
  return (
    <StyledDescription id={id} {...props}>
      <span className="visually-hidden">Description:</span>
      {children}
    </StyledDescription>
  );
};
