import { FC, ReactNode, useId, useState } from "react";
import iconChevron from "@tabler/icons/chevron-down.svg";
import AnimateHeight from "react-animate-height";
import { useTheme } from "styled-components";

import { InferComponentProps } from "@/types/styled";

import SvgSprite from "../svg/SvgSprite";

import {
  StyledExpandable,
  StyledExpandableContainer,
  StyledExpandableSummary,
} from "./Expandable.styles";

const Expandable: FC<
  {
    /**
     * Title of the block
     */
    summary: ReactNode;
  } & InferComponentProps<typeof StyledExpandable>
> = ({ summary, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const id = useId();
  return (
    <StyledExpandable {...props} $isOpen={isOpen}>
      <StyledExpandableSummary
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{summary}</span>
        <SvgSprite src={iconChevron} />
      </StyledExpandableSummary>
      <AnimateHeight
        id={id}
        duration={theme.timings.slow}
        height={isOpen ? "auto" : 0}
      >
        <StyledExpandableContainer>{children}</StyledExpandableContainer>
      </AnimateHeight>
    </StyledExpandable>
  );
};

if (process.env.NODE_ENV === "development") {
  Expandable.whyDidYouRender = true;
}

export default Expandable;
