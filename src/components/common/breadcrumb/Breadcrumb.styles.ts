import styled from "styled-components";

export const StyledBreadcrumb = styled.nav`
  ol {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > li {
      &:not(:first-child) {
        &::before {
          content: "/";
          margin-right: 0.75rem;
        }
      }

      &:last-child {
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
`;
