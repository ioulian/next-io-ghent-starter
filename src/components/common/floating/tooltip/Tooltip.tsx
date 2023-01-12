import { mergeRefs } from "react-merge-refs";
import { FloatingPortal } from "@floating-ui/react-dom-interactions";
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useMemo,
} from "react";

import Floater from "../floater/Floater";

import {
  TooltipContext,
  TooltipOptions,
  useTooltip,
  useTooltipState,
} from "./hooks";

const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const state = useTooltipState();

    const childrenRef = (children as any).ref;
    const ref = useMemo(
      () => mergeRefs([state.reference, propRef, childrenRef]),
      [state.reference, propRef, childrenRef]
    );

    if (isValidElement(children)) {
      return cloneElement(
        children,
        state.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": state.open ? "open" : "closed",
        })
      );
    }

    return (
      <span
        ref={ref}
        // The user can style the trigger based on the state
        data-state={state.open ? "open" : "closed"}
        {...state.getReferenceProps(props)}
      >
        {children}
      </span>
    );
  }
);

const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const state = useTooltipState();

    const ref = useMemo(
      () => mergeRefs([state.floating, propRef]),
      [state.floating, propRef]
    );

    return (
      <FloatingPortal>
        {state.open && (
          <Floater
            ref={ref}
            position={{ x: state.x, y: state.y }}
            arrowPosition={state.middlewareData.arrow}
            strategy={state.strategy}
            placement={state.placement}
            arrowCallback={state.arrowCallback}
            {...state.getFloatingProps(props)}
          />
        )}
      </FloatingPortal>
    );
  }
);

// Based on: https://floating-ui.com/docs/tooltip
const Tooltip: FC<{ children: ReactNode } & TooltipOptions> & {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
} = ({ children, ...options }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

if (process.env.NODE_ENV === "development") {
  TooltipTrigger.displayName = "TooltipTrigger";
  TooltipContent.displayName = "TooltipContent";

  Tooltip.whyDidYouRender = true;
  TooltipTrigger.whyDidYouRender = true;
  TooltipContent.whyDidYouRender = true;
}

export default Tooltip;
