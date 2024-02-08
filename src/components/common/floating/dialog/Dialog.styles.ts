import { FloatingOverlay } from "@floating-ui/react";
import rgba from "polished/lib/color/rgba";
import styled, { css } from "styled-components";

export const StyledFloatingOverlay = styled(FloatingOverlay)`
  background-color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  display: grid;
  place-items: center;
  padding: 1rem;

  ${({ theme }) =>
    theme.allowBlur &&
    css`
      backdrop-filter: blur(10px);
    `}
`;
