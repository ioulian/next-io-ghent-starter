import styled from "styled-components";

export const StyledExpandableSummary = styled.summary`
  font-weight: 700;
  cursor: pointer;
  position: relative;
  display: block;
  display: flex;
  justify-content: space-between;

  &::-webkit-details-marker {
    display: none;
  }

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform ${({ theme }) => theme.timings.normal}ms;
  }
`;

export const StyledExpandable = styled.details`
  &[open] {
    > ${StyledExpandableSummary} {
      > svg {
        transform: rotate(180deg);
      }
    }
  }

  > div {
    margin-top: 1rem;
  }
`;
