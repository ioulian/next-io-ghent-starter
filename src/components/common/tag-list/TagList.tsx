import { Children, FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledTagList } from "./TagList.styles";

const TagList: FC<InferComponentProps<typeof StyledTagList>> = ({
  children,
  ...props
}) => {
  return (
    <StyledTagList {...props}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </StyledTagList>
  );
};

if (process.env.NODE_ENV === "development") {
  TagList.whyDidYouRender = true;
}

export default TagList;
