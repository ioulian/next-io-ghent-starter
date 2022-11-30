import styled from "styled-components";

import { baseFormFieldStyling } from "../form-field/FormField.styles";

export const StyledTextarea = styled.textarea`
  ${() => baseFormFieldStyling};
  font-family: inherit;
  line-height: 1.5rem;
  padding: 9px 17px;
  resize: vertical;
  font-size: 1rem;
  width: 100%;
  display: block;
`;
