import styled from "styled-components";

import { escapeSVG } from "../../../../utils/svg";
import { StyledDescription } from "../description/Description.styles";
import { StyledError } from "../error/Error.styles";

export const StyledReactSelect = styled.div`
  .react-select {
    &__control {
      color: ${({ theme }) => theme.form.input.color};
      background-color: ${({ theme }) => theme.form.input.background};
      border-radius: ${({ theme }) => theme.borderRadius.normal}px;
      outline-color: ${({ theme }) => theme.form.outline.color};
      box-shadow: ${({ theme }) => theme.form.input.shadow};
      border: 1px solid ${({ theme }) => theme.form.input.border};
      margin: 0;
      height: 2.75rem;

      &:hover {
        border-color: ${({ theme }) => theme.form.input.border};
      }
    }

    &__indicators {
      width: 3rem;
    }

    &__indicator-separator {
      display: none;
    }

    &__dropdown-indicator {
      background-image: url(${({ theme }) =>
        escapeSVG(
          `<svg width='12' height='8' viewBox='0 0 12 8' fill='${theme.form.select.indicator}' xmlns='http://www.w3.org/2000/svg'><path d='M1.41 0.59L-2.62268e-07 2L6 8L12 2L10.59 0.59L6 5.17L1.41 0.59Z'/></svg>`
        )});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 0.75rem;
      width: 2.25rem;
      height: 2.25rem;

      > svg {
        display: none;
      }
    }

    &__clear-indicator {
      width: 2.25rem;
    }

    &__value-container {
      padding-left: 1.5rem;
    }

    &__input-container {
      padding: 0;
      margin: 0;
      color: inherit;
    }

    &__placeholder {
      margin: 0;
      color: inherit;
    }
  }

  + ${StyledDescription}, + ${StyledError} {
    margin-top: 0.5rem;
  }
`;
