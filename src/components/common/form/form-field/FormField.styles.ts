import styled, { css } from "styled-components";

import { StyledLabel } from "../label/Label.styles";
import { StyledError } from "../error/Error.styles";
import { StyledDescription } from "../description/Description.styles";
import { StyledSelect } from "../select/Select.styles";
import { StyledTextarea } from "../textarea/Textarea.styles";
import { StyledInput } from "../input/Input.styles";
import { StyledToggle } from "../toggle/Toggle.styles";

export const StyledFormField = styled.div<{
  $error?: boolean;
  $isToggle?: boolean;
}>`
  border: 0;
  margin: 0;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  ${({ $error }) =>
    $error &&
    css`
      ${StyledInput},
      ${StyledSelect},
      ${StyledTextarea} {
        border-color: ${({ theme }) => theme.form.error.color};

        &:focus {
          outline-color: ${({ theme }) => theme.form.error.color};
        }
      }
    `}

  ${StyledLabel} {
    margin-bottom: 0.5rem;
  }

  ${({ $isToggle }) =>
    $isToggle &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      > ${StyledInput}, > ${StyledToggle} {
        order: -1;
        margin-right: 0.5rem;
      }

      > ${StyledLabel} {
        margin-bottom: 0;
      }

      > ${StyledError}, > ${StyledDescription} {
        width: 100%;
      }
    `}
`;

export const baseFormFieldStyling = css`
  color: ${({ theme }) => theme.form.input.color};
  background-color: ${({ theme }) => theme.form.input.background};
  border-radius: ${({ theme }) => theme.borderRadius.normal}px;
  outline-color: ${({ theme }) => theme.form.outline.color};
  box-shadow: ${({ theme }) => theme.form.input.shadow};
  border: 1px solid ${({ theme }) => theme.form.input.border};
  margin: 0;

  + ${StyledDescription}, + ${StyledError} {
    margin-top: 0.5rem;
  }
`;
