import media from "css-in-js-media";
import styled from "styled-components";

export const StyledForm = styled.form``;

export const StyledFormActions = styled.div`
  margin-top: 2.5rem;

  > * {
    width: 100%;

    ${media(">=tablet")} {
      width: auto;
    }
  }
`;

export const StyledFormRow = styled.div`
  > * {
    margin-bottom: 1.25rem;
  }

  ${media(">=tablet")} {
    display: flex;
    gap: 1.25rem;

    > * {
      flex-grow: 1;
    }
  }
`;
