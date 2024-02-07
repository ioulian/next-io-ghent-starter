import { forwardRef, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { HeadingSize, HeadingType, StyledHeading } from "./Heading.styles";

const Heading = forwardRef<
  HTMLHeadingElement,
  {
    type?: HeadingType;
    size?: HeadingSize;
  } & Omit<InferComponentProps<typeof StyledHeading>, "$size">
>(({ type = "h2", size = type, children, ...props }, ref) => {
  return (
    <StyledHeading $size={size} as={type} {...props} ref={ref}>
      {children}
    </StyledHeading>
  );
});

if (process.env.NODE_ENV === "development") {
  Heading.displayName = "Heading";
  Heading.whyDidYouRender = true;
}

export default memo(Heading);
