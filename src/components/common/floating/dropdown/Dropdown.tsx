import {
  arrow,
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from "@floating-ui/react-dom-interactions";
import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { mergeRefs } from "react-merge-refs";
import { useTheme } from "styled-components";

import { Floater } from "../floater/Floater";

import { StyledMenuWrapper } from "./Dropdown.styles";

interface WithTypeAheadKey {
  typeaheadKey?: string;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  nested?: boolean;
  children?: ReactNode;
}

const makeMenuItem = (
  children: ReactNode,
  props: WithTypeAheadKey & ButtonHTMLAttributes<HTMLButtonElement>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      // @ts-ignore
      ref,
      ...props,
    });
  }

  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
};

export const DropdownMenuItem = forwardRef<
  HTMLButtonElement,
  WithTypeAheadKey & ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return makeMenuItem(children, props, ref);
});

if (process.env.NODE_ENV !== "production") {
  DropdownMenuItem.displayName = "DropdownMenuItem";
}

const DropdownMenu = forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>(({ children, trigger, ...props }, forwardedRef) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [allowHover, setAllowHover] = useState(false);

  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const listContentRef = useRef(
    Children.map(children, (child) =>
      isValidElement(child) ? child.props.typeaheadKey : null
    ) as Array<string | null>
  );

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const nested = parentId !== null;
  const theme = useTheme();
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    placement,
    update,
    middlewareData,
  } = useFloating<HTMLButtonElement>({
    open,
    nodeId,
    onOpenChange: setOpen,
    placement: nested ? "right-start" : "bottom-start",
    middleware: [
      offset(theme.floating.popover.offset),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const arrowCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      update();
    },
    [update]
  );

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useHover(context, {
        handleClose: safePolygon({ restMs: 25 }),
        enabled: nested && allowHover,
        delay: { open: 75 },
      }),
      useClick(context, {
        toggle: !nested || !allowHover,
        event: "mousedown",
        ignoreMouse: nested,
      }),
      useRole(context, { role: "menu" }),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        nested,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : undefined,
        activeIndex,
      }),
    ]
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    function handleTreeClick() {
      setOpen(false);
    }

    tree?.events.on("click", handleTreeClick);
    return () => {
      tree?.events.off("click", handleTreeClick);
    };
  }, [tree]);

  // Determine if "hover" logic can run based on the modality of input. This
  // prevents unwanted focus synchronization as menus open and close with
  // keyboard navigation and the cursor is resting on the menu.
  useEffect(() => {
    function onPointerMove({ pointerType }: PointerEvent) {
      if (pointerType === "mouse") {
        setAllowHover(true);
      }
    }

    function onKeyDown() {
      setAllowHover(false);
    }

    window.addEventListener("pointermove", onPointerMove, {
      once: true,
      capture: true,
    });
    window.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.removeEventListener("pointermove", onPointerMove, {
        capture: true,
      });
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [allowHover]);

  const referenceRef = useMemo(
    () => mergeRefs([reference, forwardedRef]),
    [reference, forwardedRef]
  );

  return (
    <FloatingNode id={nodeId}>
      {makeMenuItem(
        trigger,
        {
          ...getReferenceProps({
            ...props,
            className: `${open ? "open" : ""}`,
            onClick(event) {
              event.stopPropagation();
            },
            ...(nested && {
              // Indicates this is a nested <Menu /> acting as a <MenuItem />.
              role: "menuitem",
            }),
          }),
        },
        referenceRef
      )}
      <FloatingPortal>
        {open && (
          <FloatingFocusManager
            context={context}
            // Prevent outside content interference.
            modal={!nested}
            // Only initially focus the root floating menu.
            initialFocus={nested ? -1 : 0}
            // Only return focus to the root menu when menus close.
            returnFocus={!nested}
            // Allow touch screen readers to escape the modal root menu
            // without selecting anything.
            visuallyHiddenDismiss
          >
            <Floater
              ref={floating}
              position={{ x, y }}
              arrowPosition={middlewareData.arrow}
              strategy={strategy}
              placement={placement}
              arrowCallback={arrowCallback}
              {...getFloatingProps({
                // Pressing tab dismisses the menu and places focus
                // back on the trigger.
                onKeyDown(event) {
                  if (event.key === "Tab") {
                    setOpen(false);
                  }
                },
              })}
            >
              <StyledMenuWrapper>
                {Children.map(
                  children,
                  (child, index) =>
                    isValidElement(child) &&
                    cloneElement(
                      child,
                      getItemProps({
                        tabIndex: activeIndex === index ? 0 : -1,
                        role: "menuitem",
                        ref(node: HTMLButtonElement) {
                          listItemsRef.current[index] = node;
                        },
                        onClick(event) {
                          child.props.onClick?.(event);
                          tree?.events.emit("click");
                        },
                        // Allow focus synchronization if the cursor did not move.
                        onPointerEnter() {
                          if (allowHover) {
                            setActiveIndex(index);
                          }
                        },
                      })
                    )
                )}
              </StyledMenuWrapper>
            </Floater>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </FloatingNode>
  );
});

if (process.env.NODE_ENV !== "production") {
  DropdownMenu.displayName = "DropdownMenu";
}

const Dropdown = forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId == null) {
    return (
      <FloatingTree>
        <DropdownMenu {...props} ref={ref} />
      </FloatingTree>
    );
  }

  return <DropdownMenu {...props} ref={ref} />;
});

if (process.env.NODE_ENV === "development") {
  Dropdown.displayName = "Dropdown";
  Dropdown.whyDidYouRender = true;
}

export default Dropdown;
