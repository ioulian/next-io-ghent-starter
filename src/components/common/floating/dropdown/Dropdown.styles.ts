import styled from "styled-components";

export const StyledMenuWrapper = styled.div`
  > button {
    width: 100%;
    display: block;

    &:not(:first-child) {
      margin-top: 5px;
    }
  }

  > span {
    position: absolute;
  }
`;
