import {
  FC,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import iconChevron from "@tabler/icons/chevron-down.svg";
import AnimateHeight from "react-animate-height";
import { useTheme } from "styled-components";
import { useUpdateEffect } from "react-use";

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

    /**
     * Controlled
     */
    open?: boolean;

    /**
     * Is expandable currently open or not?
     *
     * @param isOpen
     */
    onToggle?: (isOpen: boolean) => void;
  } & InferComponentProps<typeof StyledExpandable>
> = ({ summary, children, open = false, onToggle, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const theme = useTheme();
  const id = useId();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useUpdateEffect(() => {
    onToggle?.(isOpen);
  }, [onToggle, isOpen]);

  const onClick = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <StyledExpandable {...props} $isOpen={isOpen}>
      <StyledExpandableSummary
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onClick}
      >
        <span>{summary}</span>
        <SvgSprite src={iconChevron} aria-hidden />
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

export default memo(Expandable);
