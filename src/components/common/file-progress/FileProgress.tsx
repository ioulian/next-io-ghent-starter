import { FC, memo, useMemo } from "react";
import { filesize } from "filesize";
import iconCheck from "@tabler/icons/check.svg";
import iconError from "@tabler/icons/x.svg";

import { InferComponentProps } from "@/types/styled";
import { ApiError } from "@/types/error";
import { API_REQUEST_STATUS } from "@/services/api.service";

import SvgSprite from "../svg/SvgSprite";

import {
  StyledFileProgress,
  StyledFileProgressContent,
  StyledFileProgressIcon,
  StyledFilePorgressInfo,
  StyledFileProgressProgressBar,
  StyledFileProgressError,
} from "./FileProgress.styles";

// Must have keys: API_REQUEST_STATUS
// TODO: move to theme
export const FileUploadStates: Record<
  API_REQUEST_STATUS,
  { main: string; accent: string }
> = {
  idle: {
    main: "#737575",
    accent: "#909090",
  },
  failed: {
    main: "#B30000",
    accent: "#D12626",
  },
  loading: {
    main: "#0059A1",
    accent: "#0073CF",
  },
  succeeded: {
    main: "#00BE62",
    accent: "#00E375",
  },
};

const FileProgress: FC<
  {
    error?: ApiError;
    current: number;
    total: number;
    status: API_REQUEST_STATUS;
  } & InferComponentProps<typeof StyledFileProgress>
> = ({ status, current = 0, error, total = 0, children, ...props }) => {
  const iconErrorStyle = useMemo(
    () => ({ color: FileUploadStates.failed.main }),
    [],
  );
  const iconCheckStyle = useMemo(
    () => ({ color: FileUploadStates.succeeded.main }),
    [],
  );
  const progressBarStyle = useMemo(
    () => ({
      backgroundColor: FileUploadStates[status].main,
      width: `${total === 0 ? 0 : Math.min((current / total) * 100, 100)}%`,
    }),
    [current, total, status],
  );
  return (
    <StyledFileProgress {...props}>
      <div>
        <StyledFileProgressIcon>
          <svg
            width="33"
            height="41"
            viewBox="0 0 33 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H24.5L33 9V41H0V0Z"
              fill={FileUploadStates[status].main}
            />
            <path
              d="M33 9L24.5 0V9H33Z"
              fill={FileUploadStates[status].accent}
            />
          </svg>
        </StyledFileProgressIcon>
        <StyledFileProgressContent>
          <StyledFilePorgressInfo>
            <span>{children}</span>
            <span>
              {status === "failed" && (
                <SvgSprite src={iconError} style={iconErrorStyle} />
              )}
              {status === "loading" && (
                <span>
                  {filesize(current)} / {filesize(total)}
                </span>
              )}
              {status === "succeeded" && (
                <SvgSprite src={iconCheck} style={iconCheckStyle} />
              )}
            </span>
          </StyledFilePorgressInfo>
          <StyledFileProgressProgressBar>
            <div>
              <div style={progressBarStyle} />
            </div>
          </StyledFileProgressProgressBar>
        </StyledFileProgressContent>
      </div>
      {!!error && (
        <StyledFileProgressError>
          {error.violations?.find(
            (violation) => violation.propertyPath === "file",
          )?.message ?? error.message}
        </StyledFileProgressError>
      )}
    </StyledFileProgress>
  );
};

export default memo(FileProgress);
