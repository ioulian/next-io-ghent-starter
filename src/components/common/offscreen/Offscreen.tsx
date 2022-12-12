import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledOffscreen } from "./Offscreen.styles";

export const Offscreen: FC<InferComponentProps<typeof StyledOffscreen>> = (
  props
) => {
  return <StyledOffscreen {...props} />;
};
