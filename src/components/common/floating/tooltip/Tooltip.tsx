import {
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLProps,
  isValidElement,
  PropsWithChildren,
  useMemo,
} from "react";
import { useTheme } from "styled-components";

import Floater from "../floater/Floater";

import {
  TooltipContext,
  TooltipOptions,
  useTooltip,
  useTooltipContext,
} from "./hooks";

const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const context = useTooltipContext();

    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.open ? "open" : "closed",
        }),
      );
    }

    return (
      <span
        ref={ref}
        // The user can style the trigger based on the state
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </span>
    );
  },
);

const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const theme = useTheme();
    const { isMounted, styles } = useTransitionStyles(context.context, {
      duration: {
        open: theme.timings.normal,
        close: theme.timings.fast,
      },
    });
    const position = useMemo(
      () => ({ x: context.x ?? 0, y: context.y ?? 0 }),
      [context.x, context.y],
    );

    if (!isMounted) {
      return null;
    }

    return (
      <FloatingPortal>
        <Floater
          ref={ref}
          position={position}
          arrowPosition={context.middlewareData.arrow}
          strategy={context.strategy}
          placement={context.placement}
          arrowCallback={context.arrowCallback}
          {...context.getFloatingProps(props)}
          style={styles}
        />
      </FloatingPortal>
    );
  },
);

// Based on: https://floating-ui.com/docs/tooltip
const Tooltip: FC<PropsWithChildren & TooltipOptions> & {
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
