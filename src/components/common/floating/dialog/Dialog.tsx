import { mergeRefs } from "react-merge-refs";
import {
  FloatingFocusManager,
  FloatingOverlay,
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
  DialogContext,
  DialogOptions,
  useDialog,
  useDialogState,
} from "./hooks";

const DialogTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function DialogTrigger({ children, ...props }, propRef) {
    const state = useDialogState();
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

const DialogContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function DialogContent(props, propRef) {
    const state = useDialogState();

    const ref = useMemo(
      () => mergeRefs([state.floating, propRef]),
      [state.floating, propRef]
    );

    return (
      <FloatingPortal>
        {state.open && (
          <FloatingOverlay className="app-dialog-overlay" lockScroll>
            <FloatingFocusManager context={state.context}>
              <Floater
                ref={ref}
                showArrow={false}
                position={{ x: state.x, y: state.y }}
                arrowPosition={state.middlewareData.arrow}
                strategy={state.strategy}
                placement={state.placement}
                aria-labelledby={state.labelId}
                aria-describedby={state.descriptionId}
                {...state.getFloatingProps(props)}
              >
                {props.children}
              </Floater>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    );
  }
);

const DialogHeading = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function DialogHeading({ children, ...props }, ref) {
    const { setLabelId } = useDialogState();
    const id = useId();

    // Only sets `aria-labelledby` on the Dialog root element
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

const DialogDescription = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function DialogDescription({ children, ...props }, ref) {
    const { setDescriptionId } = useDialogState();
    const id = useId();

    // Only sets `aria-describedby` on the Dialog root element
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

const DialogClose = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  function DialogClose({ children, ...props }, ref) {
    const state = useDialogState();

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

const Dialog: FC<
  {
    children: ReactNode;
  } & DialogOptions
> & {
  Trigger: typeof DialogTrigger;
  Close: typeof DialogClose;
  Content: typeof DialogContent;
  Heading: typeof DialogHeading;
  Description: typeof DialogDescription;
} = ({ children, ...options }) => {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = useDialog(options);
  return (
    <DialogContext.Provider value={popover}>{children}</DialogContext.Provider>
  );
};

Dialog.Trigger = DialogTrigger;
Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;

export default Dialog;
