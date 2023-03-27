import styled from "styled-components";

export const StyledButtonGroup = styled.div<{ $alignRight?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: ${({ $alignRight }) =>
    $alignRight ? "flex-end" : "flex-start"};

  > hr {
    width: 1px;
    border: 0;
    background-color: currentColor;
    height: 1.25rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
