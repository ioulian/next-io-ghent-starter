import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledError } from "./Error.styles";

export const Error: FC<
  { id: string } & InferComponentProps<typeof StyledError>
> = ({ id, children, ...props }) => {
  return (
    <StyledError id={id} {...props}>
      <span className="visually-hidden">Error message:</span>
      {children}
    </StyledError>
  );
};
