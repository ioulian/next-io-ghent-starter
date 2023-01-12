import { FC } from "react";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import VisuallyHidden from "../../visually-hidden/VisuallyHidden";

import { StyledDescription } from "./Description.styles";

const Description: FC<
  { id: string } & InferComponentProps<typeof StyledDescription>
> = ({ id, children, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <StyledDescription id={id} {...props}>
      <VisuallyHidden>{t("form.description.prefix")}</VisuallyHidden>
      {children}
    </StyledDescription>
  );
};

if (process.env.NODE_ENV === "development") {
  Description.whyDidYouRender = true;
}

export default Description;
