import { FC, ReactNode } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledExpandable, StyledExpandableSummary } from "./Expandable.styles";

export const Expandable: FC<
  { summary: ReactNode } & InferComponentProps<typeof StyledExpandable>
> = ({ summary, children, ...props }) => {
  return (
    <StyledExpandable {...props}>
      <StyledExpandableSummary>
        <span>{summary}</span>
      </StyledExpandableSummary>
      <div>{children}</div>
    </StyledExpandable>
  );
};
