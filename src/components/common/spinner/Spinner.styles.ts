import styled, { css, keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerIcon = styled.div<{
  $primaryColor?: string;
  $secondaryColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    border-width: 2px;
    border-style: solid;
    border-top-color: ${({ $primaryColor }) => $primaryColor ?? "currentColor"};
    border-right-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-bottom-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-left-color: ${({ $secondaryColor }) =>
      $secondaryColor ?? "transparent"};
    border-radius: 50%;
    animation: ${spinnerAnimation} 1s linear infinite;
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`;

export const StyledSpinnerLabel = styled.div`
  font-size: 0.875rem;
`;

export const StyledSpinner = styled.div<{
  $fullWidth?: boolean;
  $fullHeight?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  ${({ $fullWidth }) =>
    $fullWidth
      ? css`
          width: 100%;
        `
      : ""}

  ${({ $fullHeight }) =>
    $fullHeight
      ? css`
          height: 100%;
        `
      : ""}
`;
