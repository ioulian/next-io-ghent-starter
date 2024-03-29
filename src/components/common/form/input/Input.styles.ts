import styled from "styled-components";

import { escapeSVG } from "../../../../utils/svg";
import { baseFormFieldStyling } from "../form-field/FormField.styles";

export const StyledInput = styled.input`
  ${() => baseFormFieldStyling};
  appearance: none;

  &[type="password"] {
    &::-ms-reveal {
      display: none;
    }
  }

  &:not([type="radio"]):not([type="checkbox"]) {
    width: 100%;
    font-family: inherit;
    line-height: 1.5rem;
    padding: 9px 17px;
    font-size: inherit;
  }

  &[type="checkbox"],
  &[type="radio"] {
    height: 1.25rem;
    width: 1.25rem;
    background-repeat: no-repeat;
    background-position: center;
    transition:
      background-color ${({ theme }) => theme.timings.fast}ms,
      border-color ${({ theme }) => theme.timings.fast}ms;

    &:checked {
      background-color: ${({ theme }) =>
        theme.form.checkbox.checked.background};
      border-color: ${({ theme }) => theme.form.checkbox.checked.border};
    }
  }

  &[type="checkbox"] {
    background-size: 0.75rem;

    &:checked {
      background-image: url(${({ theme }) =>
        escapeSVG(
          `<svg width='24' height='24' viewBox='0 0 24 24' fill='${theme.form.checkbox.checked.color}' xmlns='http://www.w3.org/2000/svg'><path d='M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z' /></svg>`,
        )});
    }
  }

  &[type="radio"] {
    border-radius: 50%;
    background-size: 10px;

    &:checked {
      background-image: url(${({ theme }) =>
        escapeSVG(
          `<svg width='24' height='24' viewBox='0 0 24 24' fill='${theme.form.checkbox.checked.color}' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='12' /></svg>`,
        )});
    }
  }
`;

export const StyledInputIconContainer = styled.div`
  position: relative;

  > svg {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 14px;

    &:first-child {
      left: 14px;
    }

    &:last-child {
      right: 14px;
    }
  }

  > button {
    position: absolute;
    top: 10px;

    &:first-child {
      left: 10px;
    }

    &:last-child {
      right: 10px;
    }
  }

  > ${StyledInput}:not([type="radio"]):not([type="checkbox"]) {
    &:nth-child(2) {
      padding-left: 40px; // 17px * 2 + icon size
    }

    &:nth-last-child(2) {
      padding-right: 40px; // 17px * 2 + icon size
    }
  }
`;
