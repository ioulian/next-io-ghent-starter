import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
  memo,
} from "react";
import isEqual from "lodash/isEqual";
import { useCallback } from "react";

import { InferComponentProps } from "@/types/styled";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import { StyledButton } from "./Button.styles";

const Button = forwardRef<
  HTMLButtonElement,
  {
    as?: keyof JSX.IntrinsicElements;

    /**
     * Add an icon before
     */
    iconBefore?: ReactNode;

    /**
     * Add an icon after
     */
    iconAfter?: ReactNode;

    /**
     * Show progress bar
     */
    isLoading?: boolean;

    /**
     * Will hide children and show icons only
     */
    iconOnly?: boolean;
  } & InferComponentProps<typeof StyledButton>
>(
  (
    {
      iconOnly,
      iconBefore,
      iconAfter,
      isLoading = false,
      disabled,
      onClick,
      as,
      children,
      $isLoading,
      ...props
    },
    ref
  ) => {
    const newOnClick = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!isLoading && !disabled) {
          onClick?.(e);
        }
      },
      [onClick, isLoading, disabled]
    );

    return (
      <StyledButton
        ref={ref}
        type={!as || as === "button" ? "button" : undefined}
        as={as}
        {...props}
        $isLoading={isLoading}
        disabled={disabled || isLoading}
        onClick={onClick ? newOnClick : undefined}
      >
        <span>
          {isValidElement(iconBefore) &&
            cloneElement(iconBefore, {
              // @ts-ignore
              "aria-hidden": "true",
            })}
          {children &&
            (iconOnly ? (
              <VisuallyHidden>{children}</VisuallyHidden>
            ) : (
              <span>{children}</span>
            ))}
          {isValidElement(iconAfter) &&
            cloneElement(iconAfter, {
              // @ts-ignore
              "aria-hidden": "true",
            })}
        </span>
        <Spinner />
      </StyledButton>
    );
  }
);

if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
  Button.whyDidYouRender = true;
}

export default memo(Button, isEqual);
