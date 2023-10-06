import { createContext, useContext, useMemo, useState } from "react";

export interface OverlayOptions {
  onClose?: () => void;
}

export const useOverlay = ({ onClose }: OverlayOptions) => {
  const [headingId, setHeadingId] = useState<string | undefined>();

  return useMemo(
    () => ({
      onClose,
      headingId,
      setHeadingId,
    }),
    [onClose, headingId],
  );
};

type ContextType = ReturnType<typeof useOverlay> | null;

export const OverlayContext = createContext<ContextType>(null);

export const useOverlayContext = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error("Overlay components must be wrapped in <Overlay />");
  }

  return context;
};
