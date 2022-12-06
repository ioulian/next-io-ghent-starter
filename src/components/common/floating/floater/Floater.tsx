import { forwardRef } from "react";
import { useTheme } from "styled-components";

import { InferComponentProps } from "@/types/styled";

import { useTooltipState } from "../tooltip/hooks";
import { usePopoverState } from "../popover/hooks";
import { useDialogState } from "../dialog/hooks";

import { StyledFloater, StyledFloaterArrow } from "./Floater.styles";

type TooltipState = ReturnType<typeof useTooltipState>;
type PopoverState = ReturnType<typeof usePopoverState>;
type DialogState = ReturnType<typeof useDialogState>;

export const Floater = forwardRef<
  HTMLDivElement,
  {
    state: TooltipState | PopoverState | DialogState;
    showArrow?: boolean;
  } & InferComponentProps<typeof StyledFloater>
>(({ children, state, showArrow = true, ...props }, ref) => {
  const placement = state.placement.split("-")[0];
  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement] as string;
  const rotation = {
    top: "rotate(135deg)",
    right: "rotate(-135deg)",
    bottom: "rotate(-45deg)",
    left: "rotate(45deg)",
  }[placement] as string;

  const theme = useTheme();

  return (
    <StyledFloater
      ref={ref}
      {...props}
      style={{
        transform: `translate3d(${Math.round(state.x ?? 0)}px, ${Math.round(
          state.y ?? 0
        )}px, 0)`,
        position: state.strategy,
        visibility: state.x == null ? "hidden" : "visible",
        ...props.style,
      }}
    >
      {children}
      {showArrow && (state as TooltipState | PopoverState).arrowCallback && (
        <StyledFloaterArrow
          ref={(state as TooltipState | PopoverState).arrowCallback}
          style={{
            left: state.middlewareData.arrow?.x
              ? `${state.middlewareData.arrow.x}px`
              : "",
            top: state.middlewareData.arrow?.y
              ? `${state.middlewareData.arrow.y}px`
              : "",
            [staticSide]: `-${theme.floating.floater.arrow.size / 2}px`,
            transform: rotation,
          }}
        ></StyledFloaterArrow>
      )}
    </StyledFloater>
  );
});

Floater.displayName = "Floater";
