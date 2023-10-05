import { CSSProperties, forwardRef, useMemo } from "react";
import { useTheme } from "styled-components";
import { Coords, Placement, Strategy } from "@floating-ui/react";

import { InferComponentProps } from "@/types/styled";

import { StyledFloater, StyledFloaterArrow } from "./Floater.styles";

const Floater = forwardRef<
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
    ref,
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

    const style = useMemo<CSSProperties>(
      () => ({
        transform: `translate3d(${Math.round(position.x ?? 0)}px, ${Math.round(
          position.y ?? 0,
        )}px, 0)`,
        position: strategy,
        visibility: position.x === null ? "hidden" : "visible",
        ...props.style,
      }),
      [position.y, position.x, props.style, strategy],
    );

    const arrowStyle = useMemo(
      () => ({
        left: arrowPosition?.x ? `${arrowPosition.x}px` : "",
        top: arrowPosition?.y ? `${arrowPosition.y}px` : "",
        [staticSide]: `-${theme.floating.floater.arrow.size / 2}px`,
        transform: rotation,
      }),
      [
        arrowPosition?.x,
        arrowPosition?.y,
        rotation,
        staticSide,
        theme.floating.floater.arrow.size,
      ],
    );

    return (
      <StyledFloater ref={ref} {...props} style={style}>
        {children}
        {showArrow && arrowCallback ? (
          <StyledFloaterArrow ref={arrowCallback} style={arrowStyle} />
        ) : null}
      </StyledFloater>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Floater.displayName = "Floater";
  Floater.whyDidYouRender = true;
}

export default Floater;
