import media from "css-in-js-media";
import { ellipsis } from "polished";
import styled from "styled-components";

export const StyledFilePorgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
  width: 100%;

  > span {
    line-height: 1.25rem;
    font-size: 1rem;

    &:first-child {
      ${ellipsis()}
      color: ${({ theme }) => theme.colors.body};
      font-weight: 700;
      flex: 1;
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.body};
      flex-shrink: 0;
      white-space: nowrap;

      > svg {
        width: 1rem;
        height: 1rem;
      }

      > span {
        display: none;

        ${media(">=tablet")} {
          display: block;
        }
      }
    }
  }
`;

export const StyledFileProgressProgressBar = styled.div`
  margin-top: auto;

  > div {
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.fileProgress.progressBackground};
    border-radius: 1.5px;

    > div {
      height: 100%;
    }
  }
`;

export const StyledFileProgressContent = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 53px);
`;

export const StyledFileProgressIcon = styled.div`
  flex-shrink: 0;
  flex-grow: 0;

  > svg {
    width: 33px;
    height: 41px;
  }
`;

export const StyledFileProgressError = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const StyledFileProgress = styled.div`
  > div {
    &:first-child {
      display: flex;
      gap: 1.25rem;
      max-width: 100%;
    }
  }
`;
