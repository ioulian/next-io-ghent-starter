import {
  FloatingFocusManager,
  FloatingPortal,
  useId,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useCallback,
  useLayoutEffect,
} from "react";
import { useTheme } from "styled-components";

import Floater from "../floater/Floater";

import {
  PopoverContext,
  PopoverOptions,
  usePopover,
  usePopoverContext,
} from "./hooks";

const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const context = usePopoverContext();
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
      <button
        ref={ref}
        type="button"
        // The user can style the trigger based on the state
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  },
);

const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const context = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const theme = useTheme()!;
    const { isMounted, styles } = useTransitionStyles(context.context, {
      duration: theme.timings.fast,
    });

    return (
      <FloatingPortal>
        {isMounted ? (
          <FloatingFocusManager context={context.context} modal={context.modal}>
            <Floater
              ref={ref}
              position={{ x: context.x ?? 0, y: context.y ?? 0 }}
              arrowPosition={context.middlewareData.arrow}
              strategy={context.strategy}
              placement={context.placement}
              arrowCallback={context.arrowCallback}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
              style={styles}
            >
              {props.children}
            </Floater>
          </FloatingFocusManager>
        ) : null}
      </FloatingPortal>
    );
  },
);

const PopoverHeading = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = usePopoverContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Popover root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
      setLabelId(id);
      return () => setLabelId(undefined);
    }, [id, setLabelId]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        id,
        ...props,
      });
    }

    return (
      <h2
        {...props}
        // @ts-ignore
        ref={ref}
        id={id}
      >
        {children}
      </h2>
    );
  },
);

const PopoverDescription = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const { setDescriptionId } = usePopoverContext();
    const id = useId();

    // Only sets `aria-describedby` on the Popover root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
      setDescriptionId(id);
      return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        id,
        ...props,
      });
    }

    return (
      <p
        {...props}
        // @ts-ignore
        ref={ref}
        id={id}
      >
        {children}
      </p>
    );
  },
);

const PopoverClose = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const state = usePopoverContext();
    const onClick = useCallback(() => {
      state.setOpen(false);
    }, [state]);

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        onClick,
        ...props,
      });
    }

    return (
      <button
        onClick={onClick}
        {...props}
        type="button"
        // @ts-ignore
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

// Based on: https://floating-ui.com/docs/popover
const Popover: FC<
  {
    children: ReactNode;
  } & PopoverOptions
> & {
  Trigger: typeof PopoverTrigger;
  Close: typeof PopoverClose;
  Content: typeof PopoverContent;
  Heading: typeof PopoverHeading;
  Description: typeof PopoverDescription;
} = ({ children, modal = false, ...restOptions }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Close = PopoverClose;
Popover.Content = PopoverContent;
Popover.Heading = PopoverHeading;
Popover.Description = PopoverDescription;

if (process.env.NODE_ENV === "development") {
  PopoverClose.displayName = "PopoverClose";
  PopoverTrigger.displayName = "PopoverTrigger";
  PopoverContent.displayName = "PopoverContent";
  PopoverHeading.displayName = "PopoverHeading";
  PopoverDescription.displayName = "PopoverDescription";

  Popover.whyDidYouRender = true;
  PopoverTrigger.whyDidYouRender = true;
  PopoverClose.whyDidYouRender = true;
  PopoverContent.whyDidYouRender = true;
  PopoverHeading.whyDidYouRender = true;
  PopoverDescription.whyDidYouRender = true;
}

export default Popover;
