import { forwardRef } from "react";
import { useTheme } from "styled-components";
import {
  Coords,
  Placement,
  Strategy,
} from "@floating-ui/react-dom-interactions";

import { InferComponentProps } from "@/types/styled";

import { StyledFloater, StyledFloaterArrow } from "./Floater.styles";

export const Floater = forwardRef<
  HTMLDivElement,
  {
    // state: TooltipState | PopoverState | DialogState;
    position: { x: number | null; y: number | null };
    arrowPosition?: Partial<Coords>;
    strategy: Strategy;
    placement: Placement;
    arrowCallback?: (node: HTMLDivElement | null) => void;
    showArrow?: boolean;
  } & InferComponentProps<typeof StyledFloater>
>(
  (
    {
      children,
      position,
      arrowPosition,
      strategy,
      placement,
      arrowCallback,
      showArrow = true,
      ...props
    },
    ref
  ) => {
    const placementFirst = placement.split("-")[0];
    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placementFirst] as string;
    const rotation = {
      top: "rotate(135deg)",
      right: "rotate(-135deg)",
      bottom: "rotate(-45deg)",
      left: "rotate(45deg)",
    }[placementFirst] as string;

    const theme = useTheme();

    return (
      <StyledFloater
        ref={ref}
        {...props}
        style={{
          transform: `translate3d(${Math.round(
            position.x ?? 0
          )}px, ${Math.round(position.y ?? 0)}px, 0)`,
          position: strategy,
          visibility: position.x == null ? "hidden" : "visible",
          ...props.style,
        }}
      >
        {children}
        {showArrow && arrowCallback && (
          <StyledFloaterArrow
            ref={arrowCallback}
            style={{
              left: arrowPosition?.x ? `${arrowPosition.x}px` : "",
              top: arrowPosition?.y ? `${arrowPosition.y}px` : "",
              [staticSide]: `-${theme.floating.floater.arrow.size / 2}px`,
              transform: rotation,
            }}
          ></StyledFloaterArrow>
        )}
      </StyledFloater>
    );
  }
);

Floater.displayName = "Floater";
