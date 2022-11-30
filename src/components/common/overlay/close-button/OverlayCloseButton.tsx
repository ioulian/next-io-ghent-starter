import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import { SvgSprite } from "../../svg/SvgSprite";

import iconClose from "./overlay-close-sprite.svg";
import { StyledOverlayCloseButton } from "./OverlayCloseButton.styles";

export const OverlayCloseButton: FC<
  InferComponentProps<typeof StyledOverlayCloseButton>
> = ({ ...props }) => {
  return (
    <StyledOverlayCloseButton {...props} aria-label={"Close"}>
      <SvgSprite src={iconClose} />
    </StyledOverlayCloseButton>
  );
};
