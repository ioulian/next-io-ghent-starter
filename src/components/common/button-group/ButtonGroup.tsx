import { FC, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledButtonGroup } from "./ButtonGroup.styles";

const ButtonGroup: FC<InferComponentProps<typeof StyledButtonGroup>> = ({
  children,
  ...props
}) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

if (process.env.NODE_ENV === "development") {
  ButtonGroup.whyDidYouRender = true;
}

export default memo(ButtonGroup);
