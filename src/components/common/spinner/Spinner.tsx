import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledSpinner } from "./Spinner.styles";

export const Spinner: FC<InferComponentProps<typeof StyledSpinner>> = ({
  ...props
}) => (
  <StyledSpinner {...props}>
    <div>
      <div></div>
    </div>
  </StyledSpinner>
);
