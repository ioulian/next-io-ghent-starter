import { FC, memo, useCallback, useEffect, useId, useState } from "react";
import { useTranslation } from "next-i18next";
import { useUpdateEffect } from "react-use";

import { InferComponentProps } from "@/types/styled";
import useResizeObserver from "@/utils/resize-observer";

import Button from "../button/Button";

import {
  StyledEllipsis,
  StyledEllipsisContent,
  StyledEllipsisContentContainer,
  StyledEllipsisHelperContent,
} from "./Ellipsis.styles";

const Ellipsis: FC<
  {
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
  } & InferComponentProps<typeof StyledEllipsis>
> = ({ children, open = false, onToggle, ...props }) => {
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [showButton, setShowButton] = useState<boolean>(true);
  const id = useId();

  // Use resize observer against the collapsed helper content
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  useEffect(() => {
    if (ref.current) {
      const isEllipsisActive =
        ref.current.offsetWidth < ref.current.scrollWidth ||
        ref.current.offsetHeight < ref.current.scrollHeight;
      setShowButton(isEllipsisActive);
    }
  }, [rect, ref]);

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
    <StyledEllipsis {...props} $isOpen={isOpen}>
      <StyledEllipsisContentContainer>
        <StyledEllipsisContent id={id}>{children}</StyledEllipsisContent>
        {/* This is a helper div to check collapsed dimensions against */}
        <StyledEllipsisHelperContent ref={ref} aria-hidden="true">
          {children}
        </StyledEllipsisHelperContent>
      </StyledEllipsisContentContainer>
      {showButton ? (
        <Button
          $size="base"
          $type="simple"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onClick}
        >
          <span>{t(`ellipsis.${isOpen ? "collapse" : "expand"}`)}</span>
        </Button>
      ) : null}
    </StyledEllipsis>
  );
};

export default memo(Ellipsis);
