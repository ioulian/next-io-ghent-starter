import rgba from "polished/lib/color/rgba";
import styled from "styled-components";

export const StyledTag = styled.span`
  font-size: 0.625rem;
  line-height: calc(1.5rem - 2px);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1px solid ${({ theme }) => rgba(theme.colors.body, 0.5)};
  display: inline-block;
  font-weight: 700;
  border-radius: 3px;
`;
