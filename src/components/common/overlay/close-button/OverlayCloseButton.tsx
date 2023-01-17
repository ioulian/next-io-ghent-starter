import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import iconClose from "@tabler/icons/x.svg";
import isEqual from "lodash/isEqual";

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

if (process.env.NODE_ENV === "development") {
  OverlayCloseButton.whyDidYouRender = true;
}

export default memo(OverlayCloseButton, isEqual);
