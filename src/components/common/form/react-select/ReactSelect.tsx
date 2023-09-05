import { FC, memo } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledReactSelect } from "./ReactSelect.styles";

const ReactSelectContainer: FC<
  InferComponentProps<typeof StyledReactSelect>
> = ({ children }) => {
  return <StyledReactSelect>{children}</StyledReactSelect>;
};

if (process.env.NODE_ENV === "development") {
  ReactSelectContainer.whyDidYouRender = true;
}

export default memo(ReactSelectContainer);
