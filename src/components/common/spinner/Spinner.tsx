import { FC, ReactNode } from "react";

import { InferComponentProps } from "@/types/styled";

import {
  StyledSpinner,
  StyledSpinnerIcon,
  StyledSpinnerLabel,
} from "./Spinner.styles";

const Spinner: FC<
  {
    label?: ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
  } & InferComponentProps<typeof StyledSpinner>
> = ({
  label,
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  ...props
}) => (
  <StyledSpinner {...props}>
    <StyledSpinnerIcon
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
    >
      <div></div>
    </StyledSpinnerIcon>
    {label && <StyledSpinnerLabel>{label}</StyledSpinnerLabel>}
  </StyledSpinner>
);

export default Spinner;
