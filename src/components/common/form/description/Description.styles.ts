import styled from "styled-components";

import { StyledError } from "../error/Error.styles";

export const StyledDescription = styled.div`
  font-size: 0.875rem;

  + ${StyledError} {
    margin-top: 0.25rem;
  }

  a {
    color: inherit;
  }
`;
