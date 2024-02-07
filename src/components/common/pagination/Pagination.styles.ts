import styled from "styled-components";

export const StyledPagination = styled.div`
  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin: 0.125rem;
    display: block;
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  li {
    display: block;
    cursor: pointer;

    &:not(.break):not(.previous):not(.next) {
      border-radius: 4px;
      border: 1px solid rgba(115, 117, 117, 0.1);
      transition:
        color ${({ theme }) => theme.timings.fast}ms,
        background-color ${({ theme }) => theme.timings.fast}ms,
        border-color ${({ theme }) => theme.timings.fast}ms;
    }

    &.selected,
    &:not(.break):not(.previous):not(.next):hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  a {
    display: block;
    color: inherit;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.375rem 0.75rem;
    font-weight: 700;
  }
`;
