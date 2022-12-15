import { FC } from "react";
import { useTranslation } from "react-i18next";
import iconClose from "@tabler/icons/x.svg";

import { InferComponentProps } from "@/types/styled";

import SvgSprite from "../../svg/SvgSprite";

import { StyledOverlayCloseButton } from "./OverlayCloseButton.styles";

const OverlayCloseButton: FC<
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

export default OverlayCloseButton;
