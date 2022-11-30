import styled, { css, keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<{
  $fullWidth?: boolean;
  $fullHeight?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

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

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      border-width: 2px;
      border-style: solid;
      border-top-color: currentColor;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-radius: 50%;
      animation: ${spinnerAnimation} 1s linear infinite;
      width: 16px;
      height: 16px;
      border-width: 2px;
    }
  }
`;
