import { mergeRefs } from "react-merge-refs";
import {
  FloatingFocusManager,
  FloatingPortal,
  useId,
} from "@floating-ui/react-dom-interactions";
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useLayoutEffect,
  useMemo,
} from "react";

import { Floater } from "../floater/Floater";

import {
  PopoverContext,
  PopoverOptions,
  usePopover,
  usePopoverState,
} from "./hooks";

const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function PopoverTrigger({ children, ...props }, propRef) {
    const state = usePopoverState();
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
      <button
        ref={ref}
        // The user can style the trigger based on the state
        data-state={state.open ? "open" : "closed"}
        {...state.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  }
);

const PopoverContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function PopoverContent(props, propRef) {
    const state = usePopoverState();

    const ref = useMemo(
      () => mergeRefs([state.floating, propRef]),
      [state.floating, propRef]
    );

    return (
      <FloatingPortal>
        {state.open && (
          <FloatingFocusManager context={state.context} modal={state.modal}>
            <Floater
              ref={ref}
              position={{ x: state.x, y: state.y }}
              arrowPosition={state.middlewareData.arrow}
              strategy={state.strategy}
              placement={state.placement}
              arrowCallback={state.arrowCallback}
              aria-labelledby={state.labelId}
              aria-describedby={state.descriptionId}
              {...state.getFloatingProps(props)}
            >
              {props.children}
            </Floater>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    );
  }
);

const PopoverHeading = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function PopoverHeading({ children, ...props }, ref) {
    const { setLabelId } = usePopoverState();
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
  }
);

const PopoverDescription = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function PopoverDescription({ children, ...props }, ref) {
    const { setDescriptionId } = usePopoverState();
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
  }
);

const PopoverClose = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function PopoverClose({ children, ...props }, ref) {
    const state = usePopoverState();

    if (isValidElement(children)) {
      return cloneElement(children, {
        ref,
        onClick: () => state.setOpen(false),
        ...props,
      });
    }

    return (
      <button
        onClick={() => state.setOpen(false)}
        {...props}
        // @ts-ignore
        ref={ref}
      >
        {children}
      </button>
    );
  }
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
  Popover.whyDidYouRender = true;
  PopoverTrigger.whyDidYouRender = true;
  PopoverClose.whyDidYouRender = true;
  PopoverContent.whyDidYouRender = true;
  PopoverHeading.whyDidYouRender = true;
  PopoverDescription.whyDidYouRender = true;
}

export default Popover;
