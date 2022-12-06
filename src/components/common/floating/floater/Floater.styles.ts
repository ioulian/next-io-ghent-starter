import { rgba } from "polished";
import styled from "styled-components";

export const StyledFloater = styled.div`
  top: 0;
  left: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px ${({ theme }) => rgba(theme.colors.black, 0.25)};
  border-radius: ${({ theme }) => theme.borderRadius.normal}px;
  padding: 4px;
  width: max-content;
  padding: 5px;
`;

export const StyledFloaterArrow = styled.div`
  position: absolute;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) =>
    theme.floating.floater.arrow.size -
    2}px; // Account for 1px border on each side
  height: ${({ theme }) =>
    theme.floating.floater.arrow.size -
    2}px; // Account for 1px border on each side
  content: "";
  display: block;
`;
