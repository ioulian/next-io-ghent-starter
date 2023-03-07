import styled, { css } from "styled-components";

export const StyledExpandableSummary = styled.button`
  font-weight: 700;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform ${({ theme }) => theme.timings.normal}ms;
  }
`;

export const StyledExpandableContainer = styled.div`
  padding-top: 1rem;
`;

export const StyledExpandable = styled.div<{ $isOpen?: boolean }>`
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      > ${StyledExpandableSummary} {
        > svg {
          transform: rotate(180deg);
        }
      }
    `}
`;
