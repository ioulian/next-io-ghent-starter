import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { SvgSprite } from "../../svg/SvgSprite";

import iconClose from "./overlay-close-sprite.svg";
import { StyledOverlayCloseButton } from "./OverlayCloseButton.styles";

export const OverlayCloseButton: FC<
  InferComponentProps<typeof StyledOverlayCloseButton>
> = ({ ...props }) => {
  const { t } = useTranslation("common");

  return (
    <StyledOverlayCloseButton
      {...props}
      aria-label={t("overlay.close-button.label")}
    >
      <SvgSprite src={iconClose} />
    </StyledOverlayCloseButton>
  );
};
