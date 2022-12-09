import { darken } from "polished";
import styled, { css } from "styled-components";

import { StyledSpinner } from "../spinner/Spinner.styles";

export const StyledButton = styled.button<{
  $type?: "primary" | "secondary";
  $size?: "small" | "normal" | "large";
  $fullWidth?: boolean;
  $isLoading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.familyRegular};
  font-weight: 500;
  appearance: none;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  transition: border-color ${({ theme }) => theme.timings.fast}ms,
    background-color ${({ theme }) => theme.timings.fast}ms,
    color ${({ theme }) => theme.timings.fast}ms;

  &:disabled {
    opacity: 0.5;
    cursor: ${({ $isLoading }) => ($isLoading ? "wait" : "not-allowed")};
  }

  ${({ $type }) =>
    $type === "primary" &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => darken(0.1)(theme.colors.primary)};
        border-color: ${({ theme }) => darken(0.1)(theme.colors.primary)};
      }
    `}

  ${({ $type }) =>
    $type === "secondary" &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.white};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => darken(0.1)(theme.colors.primary)};
        border-color: ${({ theme }) => darken(0.1)(theme.colors.primary)};
      }
    `}

  ${({ $size }) =>
    $size === "small" &&
    css`
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      line-height: 1rem;
    `}

  ${({ $size }) =>
    $size === "normal" &&
    css`
      padding: 0.625rem 1.25rem;
    `}

  ${({ $size }) =>
    $size === "large" &&
    css`
      padding: 1.125rem 2rem;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity ${({ theme }) => theme.timings.fast}ms;
    opacity: ${({ $isLoading }) => ($isLoading ? "0" : "1")};

    > svg {
      flex-shrink: 0;

      ${({ $size }) =>
        ($size === "normal" || $size === "large") &&
        css`
          width: 1.5rem;
          height: 1.5rem;
        `}

      ${({ $size }) =>
        $size === "small" &&
        css`
          width: 1rem;
          height: 1rem;
        `}
    }

    > svg + span {
      margin-left: 0.5rem;
    }

    > span + svg {
      margin-left: 0.5rem;
    }
  }

  > ${StyledSpinner} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ $isLoading }) => ($isLoading ? "1" : "0")};
    transition: opacity ${({ theme }) => theme.timings.fast}ms;
    pointer-events: none;
  }
`;

StyledButton.defaultProps = {
  $type: "primary",
  $size: "normal",
  $fullWidth: false,
};
