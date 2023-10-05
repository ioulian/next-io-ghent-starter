import {
  cloneElement,
  FC,
  forwardRef,
  HTMLProps,
  isValidElement,
  memo,
  NamedExoticComponent,
  ReactNode,
  useId,
  useLayoutEffect,
} from "react";
import Modal from "react-modal";
import { useTheme } from "styled-components";
import { useCallback } from "react";

import OverlayCloseButton from "./close-button/OverlayCloseButton";
import { StyledOverlayContainer } from "./Overlay.styles";
import { OverlayContext, useOverlay, useOverlayContext } from "./hooks";

Modal.setAppElement("#__next");

const OverlayHeading = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, ref) => {
    const { setHeadingId } = useOverlayContext();
    const id = useId();

    useLayoutEffect(() => {
      setHeadingId(id);
      return () => setHeadingId(undefined);
    }, [id, setHeadingId]);

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

const MemoizedOverlayHeading = memo(OverlayHeading);

interface OverlayPropsType {
  /**
   * Control overlay visibility
   */
  isOpen: boolean;

  /**
   * Content label of the overlay for accessibility reasons
   */
  contentLabel: string;

  /**
   * Callback when user wants to close the overlay (escape button, outside
   * click, close button click)
   */
  onClose?: () => void;
  children: ReactNode;
}

const Overlay: FC<OverlayPropsType> = ({
  contentLabel,
  isOpen = false,
  children,
  onClose,
}) => {
  const theme = useTheme()!;

  const contentId = useId();

  const overlay = useOverlay({ onClose });

  const onRequestClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <Modal
      closeTimeoutMS={250}
      shouldCloseOnEsc
      shouldFocusAfterRender
      shouldReturnFocusAfterClose
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      contentLabel={contentLabel}
      htmlOpenClassName="ReactModal__Html--open"
      style={{
        overlay: {
          zIndex: theme.zIndex.overlay,
        },
      }}
      aria={{
        ...(overlay.headingId ? { labelledby: overlay.headingId } : {}),
        describedby: contentId,
      }}
      {...{ onRequestClose }}
    >
      <OverlayContext.Provider value={overlay}>
        <OverlayCloseButton />
        <StyledOverlayContainer id={contentId} tabIndex={0} role="document">
          {children}
        </StyledOverlayContainer>
      </OverlayContext.Provider>
    </Modal>
  );
};

const MemoizedOverlay = memo(
  Overlay,
) as NamedExoticComponent<OverlayPropsType> & {
  Heading: typeof MemoizedOverlayHeading;
};
MemoizedOverlay.Heading = MemoizedOverlayHeading;

if (process.env.NODE_ENV === "development") {
  OverlayHeading.displayName = "OverlayHeading";

  MemoizedOverlayHeading.whyDidYouRender = true;
  OverlayHeading.whyDidYouRender = true;
  MemoizedOverlay.whyDidYouRender = true;
  Overlay.whyDidYouRender = true;
}

export default MemoizedOverlay;
