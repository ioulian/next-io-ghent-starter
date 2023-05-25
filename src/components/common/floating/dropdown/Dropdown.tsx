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
  ButtonHTMLAttributes,
  cloneElement,
  createContext,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";

import Floater from "../floater/Floater";

import { StyledMenuWrapper } from "./Dropdown.styles";

const MenuContext = createContext<{
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>
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
  WithTypeAheadKey & ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, typeaheadKey, disabled, ...props }, ref) => {
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
});

export const DropdownMenuItem = forwardRef<
  HTMLButtonElement,
  WithTypeAheadKey & ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, typeaheadKey, disabled, ...props }, forwardedRef) => {
  const menu = useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : typeaheadKey });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  const ref = useMergeRefs([item.ref, forwardedRef]);
  if (isValidElement(children)) {
    return cloneElement(children, {
      // @ts-ignore
      ref,
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
      ...props,
    });
  }

  return (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      className="MenuItem"
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
      {...props}
    >
      {children}
    </button>
  );
});

const DropdownMenu = forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & WithTypeAheadKey & HTMLProps<HTMLButtonElement>
>(({ children, trigger, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasFocusInside, setHasFocusInside] = useState(false);

  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>(
    //Children.map(children, (child) =>
    //  isValidElement(child) ? child.props.typeaheadKey : null
    //)
    []
  );
  const parent = useContext(MenuContext);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = parentId !== null;

  const theme = useTheme()!;

  const { x, y, refs, context, update, strategy, placement, middlewareData } =
    useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? "right-start" : "bottom-start",
      middleware: [
        offset({
          mainAxis: theme.floating.popover.offset,
          alignmentAxis: theme.floating.popover.offset,
        }),
        flip(),
        shift({ padding: theme.floating.floater.shift }),
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
        handleClose: safePolygon({ blockPointerEvents: true }),
        enabled: isNested && !hasFocusInside,
        delay: { open: 75 },
      }),
      useClick(context, {
        toggle: !isNested,
        event: "mousedown",
        ignoreMouse: isNested,
      }),
      useRole(context, { role: "menu" }),
      useDismiss(context, { bubbles: true }),
      useListNavigation(context, {
        listRef: elementsRef,
        activeIndex,
        nested: isNested,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: labelsRef,
        onMatch: isOpen ? setActiveIndex : undefined,
        activeIndex,
      }),
    ]
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    if (!tree) {
      return;
    }

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

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
    duration: theme.timings.fast,
  });

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
          })
        )}
      >
        {trigger}
      </DropdownTrigger>
      <MenuContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          getItemProps,
          setHasFocusInside,
          isOpen,
        }}
      >
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isMounted && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <Floater
                  ref={refs.setFloating}
                  position={{ x, y }}
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
          )}
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
  DropdownTrigger.displayName = "DropdownTrigger";
  DropdownMenu.displayName = "DropdownMenu";
  DropdownMenuItem.displayName = "DropdownMenuItem";

  Dropdown.whyDidYouRender = true;
  DropdownTrigger.whyDidYouRender = true;
  DropdownMenu.whyDidYouRender = true;
  DropdownMenuItem.whyDidYouRender = true;
}

export default Dropdown;
