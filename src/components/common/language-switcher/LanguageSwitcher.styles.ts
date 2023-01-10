import styled from "styled-components";

export const StyledLanguageSwitcher = styled.div`
  > ul {
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    display: flex;

    > li {
      > a {
        &:hover,
        &:focus,
        &.active {
          text-decoration: underline;
        }

        > abbr {
          text-decoration: none;
        }
      }
    }
  }
`;
