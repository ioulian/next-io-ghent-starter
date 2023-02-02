import styled from "styled-components";

import { visuallyHidden } from "../../visually-hidden/VisuallyHidden.styles";
import { baseFormFieldStyling } from "../form-field/FormField.styles";

export const StyledToggle = styled.div`
  > input {
    ${() => visuallyHidden}

    &:checked + label {
      background-color: ${({ theme }) =>
        theme.form.checkbox.checked.background};
      border-color: ${({ theme }) => theme.form.checkbox.checked.border};

      &::before {
        background-color: ${({ theme }) => theme.form.checkbox.checked.color};
        transform: translateX(calc(2.5rem - 6px - 14px));
      }
    }
  }

  > label {
    ${() => baseFormFieldStyling};
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    display: block;
    position: relative;
    background-color: ${({ theme }) => theme.form.input.background};
    transition: background-color ${({ theme }) => theme.timings.normal}ms,
      border-color ${({ theme }) => theme.timings.normal}ms;

    &::before {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.form.input.border};
      content: "";
      top: 2px;
      left: 2px;
      position: absolute;
      transition: transform ${({ theme }) => theme.timings.normal}ms,
        background-color ${({ theme }) => theme.timings.normal}ms;
    }
  }
`;
