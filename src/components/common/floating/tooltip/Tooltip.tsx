import { mergeRefs } from "react-merge-refs";
import { FloatingPortal } from "@floating-ui/react-dom-interactions";
import {
  cloneElement,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useMemo,
} from "react";

import { Floater } from "../floater/Floater";

import {
  TooltipContext,
  TooltipOptions,
  useTooltip,
  useTooltipState,
} from "./hooks";

// Based on: https://floating-ui.com/docs/tooltip

export const Tooltip = ({
  children,
  ...options
}: { children: ReactNode } & TooltipOptions) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
};

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function TooltipTrigger({ children, ...props }, propRef) {
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

export const TooltipContent = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(function TooltipContent(props, propRef) {
  const state = useTooltipState();

  const ref = useMemo(
    () => mergeRefs([state.floating, propRef]),
    [state.floating, propRef]
  );

  return (
    <FloatingPortal>
      {state.open && (
        <Floater ref={ref} state={state} {...state.getFloatingProps(props)} />
      )}
    </FloatingPortal>
  );
});
