import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import iconClose from "@tabler/icons/x.svg";

import { InferComponentProps } from "@/types/styled";

import SvgSprite from "../../svg/SvgSprite";
import { useOverlayContext } from "../hooks";

import { StyledOverlayCloseButton } from "./OverlayCloseButton.styles";

const OverlayCloseButton: FC<
  Omit<InferComponentProps<typeof StyledOverlayCloseButton>, "children">
> = ({ ...props }) => {
  const { t } = useTranslation("common");

  const { onClose } = useOverlayContext();

  return (
    <StyledOverlayCloseButton
      {...props}
      onClick={onClose}
      aria-label={t("overlay.close-button.label")}
    >
      <SvgSprite src={iconClose} />
    </StyledOverlayCloseButton>
  );
};

if (process.env.NODE_ENV === "development") {
  OverlayCloseButton.whyDidYouRender = true;
}

export default memo(OverlayCloseButton);
