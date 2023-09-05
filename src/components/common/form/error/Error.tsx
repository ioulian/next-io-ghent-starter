import { FC, memo } from "react";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { StyledError } from "./Error.styles";

const Error: FC<{ id: string } & InferComponentProps<typeof StyledError>> = ({
  id,
  children,
  ...props
}) => {
  const { t } = useTranslation("common");
  return (
    <StyledError id={id} {...props} role="alert">
      <VisuallyHidden>{t("form.error.prefix")}</VisuallyHidden>
      {children}
    </StyledError>
  );
};

if (process.env.NODE_ENV === "development") {
  Error.whyDidYouRender = true;
}

export default memo(Error);
