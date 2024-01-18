import {
  ReactNode,
  forwardRef,
  MouseEvent as ReactMouseEvent,
  isValidElement,
  cloneElement,
  memo,
  ComponentProps,
} from "react";
import { useCallback } from "react";
import Link from "next/link";

import { InferComponentProps } from "@/types/styled";

import Spinner from "../spinner/Spinner";
import VisuallyHidden from "../visually-hidden/VisuallyHidden";

import { StyledButton } from "./Button.styles";

const Button = forwardRef<
  HTMLButtonElement,
  {
    as?: keyof JSX.IntrinsicElements | typeof Link;

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
  } & Omit<InferComponentProps<typeof StyledButton>, "$isLoading"> &
    ComponentProps<"a">
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
      ...props
    },
    ref,
  ) => {
    const newOnClick = useCallback(
      (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!isLoading && !disabled) {
          onClick?.(e);
        }
      },
      [onClick, isLoading, disabled],
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
              // @ts-expect-error TODO: fix me
              "aria-hidden": "true",
            })}
          {children ? (
            iconOnly ? (
              <VisuallyHidden>{children}</VisuallyHidden>
            ) : (
              <span>{children}</span>
            )
          ) : null}
          {isValidElement(iconAfter) &&
            cloneElement(iconAfter, {
              // @ts-expect-error TODO: fix me
              "aria-hidden": "true",
            })}
        </span>
        <Spinner />
      </StyledButton>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
  Button.whyDidYouRender = true;
}

export default memo(Button);
