import { FC, ReactNode, useState } from "react";
import Modal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTheme } from "styled-components";
import { useCallback } from "react";

import OverlayCloseButton from "./close-button/OverlayCloseButton";
import { StyledOverlayContainer } from "./Overlay.styles";

Modal.setAppElement("#__next");

const Overlay: FC<{
  /**
   * Control overlay visibility
   */
  isOpen: boolean;

  /**
   * Title of the overlay for accessibility reasons
   */
  title: string;

  /**
   * Callback when user wants to close the overlay (escape button, outside
   * click, close button click)
   */
  onClose?: () => void;
  children: ReactNode;
}> = ({ title, isOpen = false, children, onClose }) => {
  const [ref, setRef] = useState<Modal | null>(null);
  const theme = useTheme();

  const onRequestClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const onAfterOpen = useCallback(() => {
    // @ts-ignore We know it exists
    if (ref?.node) {
      // @ts-ignore We know it exists
      disableBodyScroll(ref.node);
    }
  }, [ref]);

  const onAfterClose = useCallback(() => {
    // @ts-ignore We know it exists
    if (ref?.node) {
      // @ts-ignore We know it exists
      enableBodyScroll(ref.node);
    }
  }, [ref]);

  return (
    <>
      <Modal
        closeTimeoutMS={250}
        shouldCloseOnEsc={true}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel={title}
        style={{
          overlay: {
            zIndex: theme.zIndex.overlay,
          },
        }}
        {...{ onAfterOpen, onAfterClose, onRequestClose }}
        ref={setRef}
      >
        <OverlayCloseButton onClick={onClose} />
        <StyledOverlayContainer>{children}</StyledOverlayContainer>
      </Modal>
    </>
  );
};

if (process.env.NODE_ENV === "development") {
  Overlay.whyDidYouRender = true;
}

export default Overlay;
