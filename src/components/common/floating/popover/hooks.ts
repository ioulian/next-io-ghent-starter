import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";

export interface PopoverOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const usePopover = ({
  initialOpen = false,
  placement,
  modal = true,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverOptions = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(theme.floating.popover.offset),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });
  const arrowCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      data.update();
    },
    [data]
  );

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      arrowCallback,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [
      open,
      setOpen,
      interactions,
      arrowCallback,
      data,
      modal,
      labelId,
      descriptionId,
    ]
  );
};

type ContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>;
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
    })
  | null;

export const PopoverContext = createContext<ContextType>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  return context;
};
