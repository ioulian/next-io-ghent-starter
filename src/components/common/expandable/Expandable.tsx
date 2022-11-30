import { FC, ReactNode } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledExpandable, StyledExpandableSummary } from "./Expandable.styles";

export const Expandable: FC<
  { summary: ReactNode; extra?: ReactNode } & InferComponentProps<
    typeof StyledExpandable
  >
> = ({ summary, extra, children, ...props }) => {
  return (
    <StyledExpandable {...props}>
      <StyledExpandableSummary>
        <span>{summary}</span>
        {extra && <span>{extra}</span>}
      </StyledExpandableSummary>
      <div>{children}</div>
    </StyledExpandable>
  );
};
