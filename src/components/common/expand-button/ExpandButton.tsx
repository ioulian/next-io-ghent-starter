import { useKey, useClickAway } from "react-use";
import { v4 as uuidv4 } from "uuid";
import {
  useState,
  useRef,
  Children,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { Placement } from "@popperjs/core";

import { InferComponentProps } from "@/types/styled";

import {
  StyledExpandButton,
  StyledExpandDropdown,
  StyledExpandDropdownArrow,
  StyledExpandDropdownUnstyled,
} from "./ExpandButton.styles";

/**
 * Dropdown button that shows more actions when clicked
 */
export const ExpandButton: FC<
  {
    trigger: ReactElement;
    placement?: Placement;
    unstyled?: boolean;
    closeOnClickInside?: boolean;
  } & InferComponentProps<typeof StyledExpandButton>
> = ({
  trigger,
  placement = "bottom",
  children,
  unstyled = false,
  closeOnClickInside = false,
}) => {
  const [referenceElement, setReferenceElement] = useState<
    HTMLDivElement | HTMLButtonElement | null
  >(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(
    null
  );

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: "arrow", options: { element: arrowElement, padding: 6 } },
      { name: "offset", options: { offset: [14, 14] } },
      { name: "preventOverflow", options: { padding: 14 } },
    ],
  });

  const [id, setId] = useState<string>("");
  useEffect(() => {
    setId(uuidv4());
  }, []);

  const close = () => {
    // This is needed when overlay is opened from inside expand button
    const openModals = document.querySelectorAll(".ReactModal__Overlay");

    // Only close if no modals are open
    if (openModals.length === 0) {
      // We wait a bit before closing
      window.setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  useKey("Escape", close);
  useClickAway(ref, close);

  useEffect(() => {
    if (isOpen) {
      if (popperElement) {
        const firstActionableElement = popperElement.querySelector("a, button");
        if (firstActionableElement) {
          // @ts-ignore
          firstActionableElement.focus?.();
        }
      }
    } else {
      referenceElement?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, popperElement]);

  const Wrapper = unstyled
    ? StyledExpandDropdownUnstyled
    : StyledExpandDropdown;

  return (
    <StyledExpandButton>
      {trigger &&
        Children.map(trigger, (child) => {
          return cloneElement(child, {
            ref: setReferenceElement,
            "aria-expanded": isOpen,
            "aria-controls": id,
            onClick: () => {
              setIsOpen(!isOpen);
            },
          });
        })}
      {isOpen &&
        createPortal(
          <Wrapper
            id={id}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            {!unstyled && (
              <StyledExpandDropdownArrow
                ref={setArrowElement}
                style={styles.arrow}
              />
            )}
            <div
              ref={ref}
              onClick={() => {
                if (closeOnClickInside) {
                  close();
                }
              }}
            >
              {children}
            </div>
          </Wrapper>,
          document.getElementById("expand-button-root") as HTMLElement
        )}
    </StyledExpandButton>
  );
};
