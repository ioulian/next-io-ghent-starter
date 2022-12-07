import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { StyledDescription } from "./Description.styles";

export const Description: FC<
  { id: string } & InferComponentProps<typeof StyledDescription>
> = ({ id, children, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <StyledDescription id={id} {...props}>
      <span className="visually-hidden">{t("form.description.prefix")}</span>
      {children}
    </StyledDescription>
  );
};
