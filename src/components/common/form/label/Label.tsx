import { FC } from "react";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import { StyledLabel } from "./Label.styles";

const Label: FC<
  {
    as?: keyof JSX.IntrinsicElements;
    required?: boolean;
  } & InferComponentProps<typeof StyledLabel>
> = ({ required, children, ...props }) => {
  const { t } = useTranslation();
  return (
    <StyledLabel {...props}>
      {children}
      {required && <span aria-label={t("form.label.required")}>*</span>}
    </StyledLabel>
  );
};

export default Label;
