import styled from "styled-components";

export const StyledOverlayCloseButton = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
  margin: 0;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  padding: 1rem;
`;