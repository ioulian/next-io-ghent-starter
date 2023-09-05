import { FC, memo } from "react";
import isEqual from "lodash/isEqual";

import { InferComponentProps } from "@/types/styled";

import {
  StyledSpinner,
  StyledSpinnerIcon,
  StyledSpinnerLabel,
} from "./Spinner.styles";

const Spinner: FC<
  {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
  } & InferComponentProps<typeof StyledSpinner>
> = ({
  children,
  primaryColor = "currentColor",
  secondaryColor = "transparent",
  backgroundColor = "transparent",
  ...props
}) => (
  <StyledSpinner {...props} $backgroundColor={backgroundColor}>
    <StyledSpinnerIcon
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
    >
      <div />
    </StyledSpinnerIcon>
    {children ? <StyledSpinnerLabel>{children}</StyledSpinnerLabel> : null}
  </StyledSpinner>
);

if (process.env.NODE_ENV === "development") {
  Spinner.whyDidYouRender = true;
}

export default memo(Spinner, isEqual);
