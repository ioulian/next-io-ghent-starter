import { FC } from "react";
import { useTranslation } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { VisuallyHidden } from "../../visually-hidden/VisuallyHidden";

import { StyledError } from "./Error.styles";

export const Error: FC<
  { id: string } & InferComponentProps<typeof StyledError>
> = ({ id, children, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <StyledError id={id} {...props}>
      <VisuallyHidden>{t("form.error.prefix")}</VisuallyHidden>
      {children}
    </StyledError>
  );
};
