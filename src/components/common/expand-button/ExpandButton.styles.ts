import styled from "styled-components";
import { rgba } from "polished";

import { StyledButton } from "../button/Button.styles";

export const StyledExpandButton = styled.div`
  position: relative;
`;

export const StyledDropdownButton = styled.div`
  position: relative;

  > div {
    display: flex;
  }
`;

export const StyledExpandDropdownArrow = styled.span`
  width: 12px;
  height: 12px;
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

export const StyledExpandDropdownUnstyled = styled.div`
  z-index: ${({ theme }) => theme.zIndex.expandButton};

  &[data-popper-placement="bottom"] > ${StyledExpandDropdownArrow} {
    top: -6px;
  }

  &[data-popper-placement="top"] > ${StyledExpandDropdownArrow} {
    bottom: -6px;

    &::before {
      transform: rotate(135deg);
    }
  }
`;

export const StyledExpandDropdown = styled(StyledExpandDropdownUnstyled)`
  > div {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => rgba(theme.colors.black, 0.25)};
    border-radius: 4px;
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

  &[data-popper-placement*="bottom"] > ${StyledExpandDropdownArrow} {
    top: -6px;
  }

  &[data-popper-placement*="top"] > ${StyledExpandDropdownArrow} {
    bottom: -6px;

    &::before {
      transform: rotate(135deg);
    }
  }
`;
