import styled, { css } from "styled-components";

import { StyledLabel } from "../label/Label.styles";
import { StyledError } from "../error/Error.styles";
import { StyledDescription } from "../description/Description.styles";
import { StyledSelect } from "../select/Select.styles";
import { StyledTextarea } from "../textarea/Textarea.styles";
import { StyledInput } from "../input/Input.styles";

export const StyledFormField = styled.div<{
  $error?: boolean;
  $isToggle?: boolean;
}>`
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  ${({ $error }) =>
    $error &&
    css`
      ${StyledInput},
      ${StyledSelect},
      ${StyledTextarea} {
        border-color: ${({ theme }) => theme.colors.primary[500]};

        &:focus {
          outline-color: ${({ theme }) => theme.colors.primary[500]};
        }
      }
    `}

  ${StyledLabel} {
    margin-bottom: 0.5rem;
  }

  ${({ $isToggle, $error }) =>
    $isToggle &&
    css`
    padding-left: 2rem;
    position: relative;
    ${
      $error &&
      css`
        ${StyledInput} {
          border-color: ${({ theme }) => theme.colors.primary[500]};

          &:focus {
            outline-color: ${({ theme }) => theme.colors.primary[500]};
          }
        }
      `
    }}

      > ${StyledInput} {
        position: absolute;
        left: 0;
        top: 2px;
        margin: 0;
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
