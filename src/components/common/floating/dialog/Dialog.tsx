import {
  FloatingFocusManager,
  FloatingOverlay,
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
  useLayoutEffect,
} from "react";
import { useCallback } from "react";
import { useTheme } from "styled-components";

import Floater from "../floater/Floater";

import {
  DialogContext,
  DialogOptions,
  useDialog,
  useDialogContext,
} from "./hooks";

const DialogTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propRef) => {
    const context = useDialogContext();
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

const DialogContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, propRef) => {
    const context = useDialogContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const theme = useTheme()!;
    const { isMounted, styles } = useTransitionStyles(context.context, {
      duration: theme.timings.normal,
    });

    return (
      <FloatingPortal>
        {isMounted ? (
          <FloatingOverlay
            className="app-dialog-overlay"
            lockScroll
            style={styles}
          >
            <FloatingFocusManager context={context.context}>
              <Floater
                ref={ref}
                showArrow={false}
                position={{ x: context.x ?? 0, y: context.y ?? 0 }}
                arrowPosition={context.middlewareData.arrow}
                strategy={context.strategy}
                placement={context.placement}
                aria-labelledby={context.labelId}
                aria-describedby={context.descriptionId}
                {...context.getFloatingProps(props)}
              >
                {props.children}
              </Floater>
            </FloatingFocusManager>
          </FloatingOverlay>
        ) : null}
      </FloatingPortal>
    );
  },
);

const DialogHeading = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = useDialogContext();
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
  },
);

const DialogDescription = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const { setDescriptionId } = useDialogContext();
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
  },
);

const DialogClose = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const context = useDialogContext();
    const onClick = useCallback(() => {
      context.setOpen(false);
    }, [context]);

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

if (process.env.NODE_ENV === "development") {
  DialogTrigger.displayName = "DialogTrigger";
  DialogContent.displayName = "DialogContent";
  DialogHeading.displayName = "DialogHeading";
  DialogDescription.displayName = "DialogDescription";
  DialogClose.displayName = "DialogClose";

  Dialog.whyDidYouRender = true;
  DialogTrigger.whyDidYouRender = true;
  DialogClose.whyDidYouRender = true;
  DialogContent.whyDidYouRender = true;
  DialogHeading.whyDidYouRender = true;
  DialogDescription.whyDidYouRender = true;
}

export default Dialog;
