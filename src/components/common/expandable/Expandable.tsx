import { FC, ReactNode } from "react";
import iconChevron from "@tabler/icons/chevron-down.svg";

import { InferComponentProps } from "@/types/styled";

import { SvgSprite } from "../svg/SvgSprite";

import { StyledExpandable, StyledExpandableSummary } from "./Expandable.styles";

export const Expandable: FC<
  { summary: ReactNode } & InferComponentProps<typeof StyledExpandable>
> = ({ summary, children, ...props }) => {
  return (
    <StyledExpandable {...props}>
      <StyledExpandableSummary>
        <span>{summary}</span>
        <SvgSprite src={iconChevron} />
      </StyledExpandableSummary>
      <div>{children}</div>
    </StyledExpandable>
  );
};
