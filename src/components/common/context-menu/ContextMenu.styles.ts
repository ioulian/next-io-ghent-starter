import styled from "styled-components";
import { rgba } from "polished";

import { StyledButton } from "../button/Button.styles";

export const StyledContextMenu = styled.div`
  position: relative;
`;

export const StyledContextMenuArrow = styled.span`
  width: ${({ theme }) => theme.contextMenu.arrowSize}px;
  height: ${({ theme }) => theme.contextMenu.arrowSize}px;
  display: block;

  &::before {
    border-top: 1px solid ${({ theme }) => theme.colors.primary};
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    transform: rotate(-45deg);
    content: "";
    display: block;
  }
`;

export const StyledContextMenuDropdownUnstyled = styled.div`
  z-index: ${({ theme }) => theme.zIndex.contextMenu};

  &[data-popper-placement="bottom"] > ${StyledContextMenuArrow} {
    top: -${({ theme }) => theme.contextMenu.arrowSize / 2}px;
  }

  &[data-popper-placement="top"] > ${StyledContextMenuArrow} {
    bottom: -${({ theme }) => theme.contextMenu.arrowSize / 2}px;

    &::before {
      transform: rotate(135deg);
    }
  }
`;

export const StyledContextMenuDropdown = styled(
  StyledContextMenuDropdownUnstyled
)`
  > div {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => rgba(theme.colors.black, 0.25)};
    border-radius: ${({ theme }) => theme.borderRadius.normal}px;
    max-height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 7px 0;
    max-width: 320px;

    > ${StyledButton} {
      width: 100%;
      white-space: nowrap;
    }
  }
`;
