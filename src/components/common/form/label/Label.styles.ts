import styled from "styled-components";

export const StyledLabel = styled.label`
  font-weight: 700;
  display: block;
  padding: 0;

  > span {
    color: ${({ theme }) => theme.form.asterisk.color};
  }
`;
