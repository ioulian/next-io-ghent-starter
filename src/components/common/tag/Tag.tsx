import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledTag } from "./Tag.styles";

const Tag: FC<InferComponentProps<typeof StyledTag>> = ({
  children,
  ...props
}) => {
  return <StyledTag {...props}>{children}</StyledTag>;
};

if (process.env.NODE_ENV === "development") {
  Tag.whyDidYouRender = true;
}

export default Tag;
