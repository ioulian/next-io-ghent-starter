import styled from "styled-components";

export const StyledText = styled.div`
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.02em;

  p {
    + p,
    + ul {
      margin-top: 1.5rem;
    }
  }

  ul {
    li {
      &::before {
        content: "-";
        margin-right: 0.5rem;
      }
    }
  }
`;
