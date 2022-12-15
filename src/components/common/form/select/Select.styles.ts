import styled from "styled-components";

import { escapeSVG } from "../../../../utils/svg";
import { baseFormFieldStyling } from "../form-field/FormField.styles";

export const StyledSelect = styled.select`
  ${() => baseFormFieldStyling};
  width: 100%;
  background-image: url(${({ theme }) =>
    escapeSVG(
      `<svg width='12' height='8' viewBox='0 0 12 8' fill='${theme.form.select.indicator}' xmlns='http://www.w3.org/2000/svg'><path d='M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z'/></svg>`
    )});
  background-position: right 1.5rem center;
  background-repeat: no-repeat;
  background-size: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 3rem;
  appearance: none;
  height: 2.75rem;
  line-height: 1.5rem;
  padding: 9px 17px;
  font-size: 1rem;
`;
