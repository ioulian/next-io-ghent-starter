import styled, { css } from "styled-components";

export const visuallyHidden = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  margin-top: -1px;
`;

export const StyledVisuallyHidden = styled.span`
  ${() => visuallyHidden}
`;
