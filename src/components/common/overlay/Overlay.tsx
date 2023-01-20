import {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useId,
  useState,
} from "react";
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
   * Content label of the overlay for accessibility reasons
   */
  contentLabel: string;

  /**
   * Heading of the modal
   */
  heading: ReactElement;

  /**
   * Callback when user wants to close the overlay (escape button, outside
   * click, close button click)
   */
  onClose?: () => void;
  children: ReactNode;
}> = ({ contentLabel, heading, isOpen = false, children, onClose }) => {
  const [ref, setRef] = useState<Modal | null>(null);
  const theme = useTheme();

  const headingId = useId();
  const contentId = useId();

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

  // TODO: make heading as a subcomponent
  return (
    <>
      <Modal
        closeTimeoutMS={250}
        shouldCloseOnEsc={true}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel={contentLabel}
        style={{
          overlay: {
            zIndex: theme.zIndex.overlay,
          },
        }}
        aria={{
          labelledby: headingId,
          describedby: contentId,
        }}
        {...{ onAfterOpen, onAfterClose, onRequestClose }}
        ref={setRef}
      >
        <OverlayCloseButton onClick={onClose} />
        <StyledOverlayContainer id={contentId} tabIndex={0} role="document">
          {isValidElement(heading) &&
            cloneElement(heading, {
              // @ts-ignore
              id: headingId,
            })}
          {children}
        </StyledOverlayContainer>
      </Modal>
    </>
  );
};

if (process.env.NODE_ENV === "development") {
  Overlay.whyDidYouRender = true;
}

export default Overlay;
