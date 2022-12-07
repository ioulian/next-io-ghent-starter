import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { StyledError } from "./Error.styles";

export const Error: FC<
  { id: string } & InferComponentProps<typeof StyledError>
> = ({ id, children, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <StyledError id={id} {...props}>
      <span className="visually-hidden">{t("form.error.prefix")}</span>
      {children}
    </StyledError>
  );
};
