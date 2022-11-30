import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledSelect } from "./Select.styles";

export const Select = forwardRef<
  HTMLSelectElement,
  {
    addEmptyOption?: boolean;
  } & InferComponentProps<typeof StyledSelect>
>(({ addEmptyOption = false, children, ...props }, ref) => {
  return (
    <StyledSelect {...props} ref={ref}>
      {addEmptyOption && <option value="">Select...</option>}
      {children}
    </StyledSelect>
  );
});

Select.displayName = "Select";
