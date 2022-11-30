import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledText } from "./Text.styles";

export const Text: FC<InferComponentProps<typeof StyledText>> = ({
  children,
  ...props
}) => {
  return <StyledText {...props}>{children}</StyledText>;
};
