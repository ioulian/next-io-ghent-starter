import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { Offscreen } from "../../offscreen/Offscreen";

import { StyledError } from "./Error.styles";

export const Error: FC<
  { id: string } & InferComponentProps<typeof StyledError>
> = ({ id, children, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <StyledError id={id} {...props}>
      <Offscreen>{t("form.error.prefix")}</Offscreen>
      {children}
    </StyledError>
  );
};
