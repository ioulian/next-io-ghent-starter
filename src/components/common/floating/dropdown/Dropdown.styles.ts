import styled from "styled-components";

export const StyledMenuWrapper = styled.div`
  > * {
    width: 100%;
    display: block;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
