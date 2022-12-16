import styled, { css } from "styled-components";

export const StyledSpacer = styled.hr`
  flex-grow: 1;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

export const StyledStepIndicator = styled.div`
  padding: 0.5rem;
  line-height: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid currentColor;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledStepContent = styled.div`
  display: flex;
`;

export const StyledStep = styled.li<{
  $state?: "complete" | "current" | "future";
}>`
  text-align: center;
  flex-shrink: 1;

  ${({ $state }) =>
    $state !== "complete" &&
    css`
      & + ${StyledSpacer} {
        opacity: 0.5;
      }
    `}

  ${({ $state }) =>
    ["complete", "current"].includes($state!) &&
    css`
      ${StyledStepIndicator} {
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.body};
      }
    `}

  ${({ $state }) =>
    $state === "current" &&
    css`
      ${StyledStepContent} {
        font-weight: 700;
      }
    `}
`;

export const StyledStepper = styled.ul`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
