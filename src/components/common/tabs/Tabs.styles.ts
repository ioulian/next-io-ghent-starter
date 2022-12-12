import styled from "styled-components";

export const StyledTabs = styled.div`
  -webkit-tap-highlight-color: transparent;

  .react-tabs {
    &__tab {
      display: inline-block;
      position: relative;
      list-style: none;
      cursor: pointer;
      letter-spacing: -0.02em;
      transition: color ${({ theme }) => theme.timings.fast}ms;
      margin-bottom: -1px;

      &:not(:last-child) {
        margin-right: 1.75rem;
      }

      > span {
        padding-bottom: 0.5rem;
        display: block;
      }

      &--selected {
        > span {
          border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        }
      }

      &--disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    &__tab-panel {
      &--selected {
        display: block;
      }

      > * {
        margin-top: 1.25rem;
      }
    }

    &__tab:focus .react-tabs__tab-panel {
      display: none;
    }
  }
`;
