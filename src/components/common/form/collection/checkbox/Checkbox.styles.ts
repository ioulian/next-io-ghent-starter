import styled from "styled-components";

import { StyledLabel } from "../../label/Label.styles";

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;

  > input {
    margin-right: 0.75rem;

    &:disabled + ${StyledLabel} {
      cursor: not-allowed;
    }
  }

  > ${StyledLabel} {
    margin-bottom: 0;
  }
`;
