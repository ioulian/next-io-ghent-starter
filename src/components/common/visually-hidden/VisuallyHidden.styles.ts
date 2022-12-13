import styled from "styled-components";

export const StyledVisuallyHidden = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  margin-top: -1px;
`;
