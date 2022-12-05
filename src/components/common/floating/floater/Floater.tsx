import { forwardRef } from "react";
import { Placement } from "@floating-ui/react-dom-interactions";

import { InferComponentProps } from "@/types/styled";

import { StyledFloater, StyledFloaterArrow } from "./Floater.styles";

export const Floater = forwardRef<
  HTMLDivElement,
  {
    arrowRef?: (node: HTMLDivElement | null) => void;
    arrowProps?: { x?: number; y?: number };
    placement: Placement;
  } & InferComponentProps<typeof StyledFloater>
>(({ arrowRef, arrowProps, placement = "bottom", children, ...props }, ref) => {
  console.log(arrowProps);
  const staticSide: any = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]];
  return (
    <StyledFloater ref={ref} {...props}>
      {children}
      <StyledFloaterArrow
        ref={arrowRef}
        style={{
          left: arrowProps?.x ? `${arrowProps.x}px` : "",
          top: arrowProps?.x ? `${arrowProps.y}px` : "",
          [staticSide]: "-5px",
        }}
      ></StyledFloaterArrow>
    </StyledFloater>
  );
});

Floater.displayName = "Floater";
