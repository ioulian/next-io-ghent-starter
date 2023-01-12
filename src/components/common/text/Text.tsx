import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledText } from "./Text.styles";

const Text: FC<InferComponentProps<typeof StyledText>> = ({
  children,
  ...props
}) => {
  return <StyledText {...props}>{children}</StyledText>;
};

if (process.env.NODE_ENV === "development") {
  Text.whyDidYouRender = true;
}

export default Text;
