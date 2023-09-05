import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import { StyledSelect } from "./Select.styles";

const Select = forwardRef<
  HTMLSelectElement,
  {
    addEmptyOption?: boolean;
  } & InferComponentProps<typeof StyledSelect>
>(({ addEmptyOption = false, children, ...props }, ref) => {
  const { t } = useTranslation("common");

  return (
    <StyledSelect {...props} ref={ref}>
      {addEmptyOption ? (
        <option value="">{t("form.select.emptyValue")}</option>
      ) : null}
      {children}
    </StyledSelect>
  );
});

if (process.env.NODE_ENV === "development") {
  Select.displayName = "Select";
  Select.whyDidYouRender = true;
}

export default Select;
