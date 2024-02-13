import {
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
  useMergeRefs,
  useTransitionStyles,
  useListItem,
  FloatingList,
  arrow,
} from "@floating-ui/react";
import {
  cloneElement,
  createContext,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";

import Floater from "../floater/Floater";

import { StyledMenuWrapper } from "./Dropdown.styles";

const MenuContext = createContext<{
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
});

interface WithTypeAheadKey {
  typeaheadKey?: string;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  nested?: boolean;
  children?: ReactNode;
}

export const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  WithTypeAheadKey & HTMLProps<HTMLButtonElement>
  // We need to remove these props as the may not be passed to the elements
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ children, typeaheadKey, disabled, ...props }, ref) => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...props,
    });
  }

  return (
    <button ref={ref} {...props} type="button">
      {children}
    </button>
  );
});

export const DropdownMenuItem = forwardRef<
  HTMLButtonElement,
  WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>(({ children, typeaheadKey, disabled, ...props }, forwardedRef) => {
  const menu = useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : typeaheadKey });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  const ref = useMergeRefs([item.ref, forwardedRef]);

  if (isValidElement<Record<string, unknown>>(children)) {
    return cloneElement(children, {
      ref,
      ...props,
      type: "button",
      role: "menuitem",
      tabIndex: isActive ? 0 : -1,
      disabled: disabled,
      ...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      }),
    });
  }

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      })}
    >
      {children}
    </button>
  );
});

const DropdownMenu = forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>(({ children, trigger, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasFocusInside, setHasFocusInside] = useState<boolean>(false);

  const elementsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const labelsRef = useRef<(string | null)[]>([]);
  const parent = useContext(MenuContext);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = parentId !== null;

  const theme = useTheme();

  const { x, y, refs, context, update, strategy, placement, middlewareData } =
    useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? "right-start" : "bottom-start",
      middleware: [
        offset({
          mainAxis: theme.floating.dropdown.offset,
          alignmentAxis: theme.floating.dropdown.offset,
        }),
        flip(),
        shift({ padding: theme.floating.floater.shift }),
        arrow({
          element: arrowRef,
          padding: theme.floating.floater.arrow.padding,
        }),
      ],
      whileElementsMounted: autoUpdate,
    });

  const arrowCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      update();
    },
    [update],
  );

  const hover = useHover(context, {
    handleClose: safePolygon({ blockPointerEvents: true }),
    enabled: isNested,
    delay: { open: 75 },
  });
  const click = useClick(context, {
    toggle: !isNested,
    event: "mousedown",
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    if (!tree) {
      return;
    }

    const handleTreeClick = () => {
      setIsOpen(false);
    };

    const onSubMenuOpen = (event: { nodeId: string; parentId: string }) => {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    };

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      open: theme.timings.normal,
      close: theme.timings.fast,
    },
  });

  const contextValue = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      setHasFocusInside,
      isOpen,
    }),
    [activeIndex, setActiveIndex, getItemProps, setHasFocusInside, isOpen],
  );

  const position = useMemo(() => ({ x, y }), [x, y]);

  return (
    <FloatingNode id={nodeId}>
      <DropdownTrigger
        ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
        tabIndex={
          !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
        }
        role={isNested ? "menuitem" : undefined}
        data-open={isOpen ? "" : undefined}
        data-nested={isNested ? "" : undefined}
        data-focus-inside={hasFocusInside ? "" : undefined}
        {...getReferenceProps(
          parent.getItemProps({
            ...props,
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
              props.onFocus?.(event);
              setHasFocusInside(false);
              parent.setHasFocusInside(true);
            },
          }),
        )}
      >
        {trigger}
      </DropdownTrigger>
      <MenuContext.Provider value={contextValue}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isMounted ? (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <Floater
                  ref={refs.setFloating}
                  position={position}
                  arrowPosition={middlewareData.arrow}
                  strategy={strategy}
                  placement={placement}
                  arrowCallback={arrowCallback}
                  {...getFloatingProps()}
                  style={styles}
                >
                  <StyledMenuWrapper>{children}</StyledMenuWrapper>
                </Floater>
              </FloatingFocusManager>
            </FloatingPortal>
          ) : null}
        </FloatingList>
      </MenuContext.Provider>
    </FloatingNode>
  );
});

const Dropdown = forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
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
  DropdownTrigger.displayName = "DropdownTrigger";
  DropdownMenu.displayName = "DropdownMenu";
  DropdownMenuItem.displayName = "DropdownMenuItem";

  Dropdown.whyDidYouRender = true;
  DropdownTrigger.whyDidYouRender = true;
  DropdownMenu.whyDidYouRender = true;
  DropdownMenuItem.whyDidYouRender = true;
}

export default Dropdown;
