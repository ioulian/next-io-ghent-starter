import styled, { css } from "styled-components";

import { StyledButton } from "../button/Button.styles";

export const StyledEllipsisContentContainer = styled.div`
  position: relative;
`;
export const StyledEllipsisContent = styled.div``;
export const StyledEllipsisHelperContent = styled(StyledEllipsisContent)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;
`;

export const StyledEllipsis = styled.div<{
  $isOpen?: boolean;
  $numLines?: number;
}>`
  > ${StyledButton} {
    margin-top: 1rem;
  }
  ${({ $isOpen, $numLines }) =>
    !$isOpen &&
    css`
      ${StyledEllipsisContent} {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${$numLines ?? 2};
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}

  ${({ $numLines }) => css`
    ${StyledEllipsisHelperContent} {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${$numLines ?? 2};
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`;
