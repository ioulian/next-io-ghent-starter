import { FC, memo } from "react";
import { useTranslation } from "next-i18next";
import isEqual from "lodash/isEqual";

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
      {required ? <span aria-label={t("form.label.required")}>*</span> : null}
    </StyledLabel>
  );
};

if (process.env.NODE_ENV === "development") {
  Label.whyDidYouRender = true;
}

export default memo(Label, isEqual);
