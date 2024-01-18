import { Children, cloneElement, FC, isValidElement, memo } from "react";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import { StyledBreadcrumb } from "./Breadcrumb.styles";

const Breadcrumb: FC<InferComponentProps<typeof StyledBreadcrumb>> = ({
  children,
  ...props
}) => {
  const { t } = useTranslation("common");
  return (
    <StyledBreadcrumb aria-label={t("breadcrumb.label")} {...props}>
      <ol>
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) {
            return null;
          }

          const isCurrent =
            !Array.isArray(children) || i === children?.length - 1;

          return (
            <li key={i}>
              {cloneElement(child, {
                ...child.props,
                ...(isCurrent ? { "aria-current": "page" } : {}),
              })}
            </li>
          );
        })}
      </ol>
    </StyledBreadcrumb>
  );
};

if (process.env.NODE_ENV === "development") {
  Breadcrumb.whyDidYouRender = true;
}

export default memo(Breadcrumb);
