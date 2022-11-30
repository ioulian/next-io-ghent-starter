import styled, { css } from "styled-components";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const StyledHeading = styled.div<{ $size?: HeadingSize }>`
  font-family: ${({ theme }) => theme.fonts.familyHeadings};
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;

  ${({ $size }) =>
    $size === "display"
      ? css`
          font-size: 1.625rem;
          line-height: 1.24;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 3rem;
          }
        `
      : $size === "h1"
      ? css`
          font-size: 1.75rem;
          line-height: 1.24;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 2.25rem;
          }
        `
      : $size === "h2"
      ? css`
          font-size: 1.5rem;
          line-height: 1.24;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 2rem;
          }
        `
      : $size === "h3"
      ? css`
          font-size: 1.25rem;
          line-height: 1.5;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 1.375rem;
          }
        `
      : $size === "h4"
      ? css`
          font-size: 1rem;
          line-height: 1.5;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 1.125rem;
          }
        `
      : $size === "h5"
      ? css`
          font-size: 0.875rem;
          line-height: 1.5;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 1rem;
          }
        `
      : $size === "h6"
      ? css`
          font-size: 0.75rem;
          line-height: 1.5;

          @media (${({ theme }) => theme.breakpoints.mdUp}) {
            font-size: 0.875rem;
          }
        `
      : ""}
`;
