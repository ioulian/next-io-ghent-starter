import styled from "styled-components";

import { StyledDescription } from "../description/Description.styles";
import { StyledError } from "../error/Error.styles";

export const StyledList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  + ${StyledDescription}, + ${StyledError} {
    margin-top: 0.5rem;
  }

  label {
    font-weight: 400;
  }
`;
