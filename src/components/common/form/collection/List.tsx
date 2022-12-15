import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledList } from "./List.styles";

const List: FC<InferComponentProps<typeof StyledList>> = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
