import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledVisuallyHidden } from "./VisuallyHidden.styles";

const VisuallyHidden: FC<InferComponentProps<typeof StyledVisuallyHidden>> = (
  props
) => {
  return <StyledVisuallyHidden {...props} />;
};

export default VisuallyHidden;
