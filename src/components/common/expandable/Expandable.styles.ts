import styled from "styled-components";

export const StyledExpandableSummary = styled.summary`
  padding-right: 2rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  display: block;

  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    display: block;
    content: "";
    top: 50%;
    position: absolute;
    transform: translateY(-50%) rotate(135deg);
    transition: transform ${({ theme }) => theme.timings.normal}ms;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledExpandable = styled.details`
  &[open] {
    > ${StyledExpandableSummary} {
      &::before {
        transform: translateY(calc(-50% + 4px)) rotate(-45deg);
      }
    }
  }

  > div {
    margin-top: 1.75rem;
  }
`;
