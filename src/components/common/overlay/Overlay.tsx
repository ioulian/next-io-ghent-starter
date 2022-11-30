import { FC, ReactNode, useState } from "react";
import Modal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useTheme } from "styled-components";

import { OverlayCloseButton } from "./close-button/OverlayCloseButton";

Modal.setAppElement("#__next");

export const Overlay: FC<{
  isOpen: boolean;
  title: string;
  onClose?: () => void;
  children: ReactNode;
}> = ({ title, isOpen = false, children, onClose }) => {
  const [ref, setRef] = useState<Modal | null>(null);
  const theme = useTheme();

  return (
    <>
      <Modal
        closeTimeoutMS={250}
        shouldCloseOnEsc={true}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          onClose?.();
        }}
        contentLabel={title}
        style={{
          overlay: {
            zIndex: theme.zIndex.overlay,
          },
        }}
        onAfterOpen={() => {
          if (ref) {
            // @ts-ignore
            disableBodyScroll(ref);
          }
        }}
        onAfterClose={() => {
          if (ref) {
            // @ts-ignore
            enableBodyScroll(ref);
          }
        }}
        ref={setRef}
      >
        <OverlayCloseButton onClick={onClose} />
        {children}
      </Modal>
    </>
  );
};
