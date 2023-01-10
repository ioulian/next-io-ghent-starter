import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
} from "react";

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
      children,
      $isLoading,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        {...props}
        $isLoading={isLoading}
        disabled={disabled || isLoading}
        onClick={
          onClick
            ? (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
                if (!isLoading && !disabled) {
                  onClick?.(e);
                }
              }
            : undefined
        }
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

if (process.env.NODE_ENV !== "production") {
  Button.displayName = "Button";
}

export default Button;
