import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledList } from "./List.styles";

export const List: FC<InferComponentProps<typeof StyledList>> = ({
  children,
}) => {
  return <StyledList>{children}</StyledList>;
};
