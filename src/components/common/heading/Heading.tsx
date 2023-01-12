import { FC, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { HeadingSize, HeadingType, StyledHeading } from "./Heading.styles";

const Heading: FC<
  {
    type?: HeadingType;
    size?: HeadingSize;
  } & InferComponentProps<typeof StyledHeading>
> = ({
  type = "h2",
  size = type,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  $size,
  children,
  ...props
}) => {
  return (
    <StyledHeading $size={size} as={type} {...props}>
      {children}
    </StyledHeading>
  );
};

if (process.env.NODE_ENV === "development") {
  Heading.whyDidYouRender = true;
}

export default memo(Heading);
