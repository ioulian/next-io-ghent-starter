import styled from "styled-components";

export const StyledForm = styled.form``;

export const StyledFormActions = styled.div`
  margin-top: 2.5rem;

  > * {
    width: 100%;

    @media (${({ theme }) => theme.breakpoints.mdUp}) {
      width: auto;
    }
  }
`;

export const StyledFormRow = styled.div`
  > * {
    margin-bottom: 1.25rem;
  }

  @media (${({ theme }) => theme.breakpoints.mdUp}) {
    display: flex;
    gap: 1.25rem;

    > * {
      flex-grow: 1;
    }
  }
`;
