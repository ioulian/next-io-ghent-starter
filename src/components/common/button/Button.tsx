import { ReactNode, forwardRef, MouseEvent as ReactMouseEvent } from "react";

import { InferComponentProps } from "@/types/styled";

import { Spinner } from "../spinner/Spinner";

import { StyledButton } from "./Button.styles";

export const Button = forwardRef<
  HTMLButtonElement,
  {
    as?: keyof JSX.IntrinsicElements;
    iconBefore?: ReactNode;
    iconAfter?: ReactNode;
    isLoading?: boolean;
  } & InferComponentProps<typeof StyledButton>
>(
  (
    {
      iconBefore,
      iconAfter,
      isLoading = false,
      disabled,
      onClick,
      children,
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
        <>
          <span>
            {iconBefore}
            {children && <span>{children}</span>}
            {iconAfter}
          </span>
          <Spinner />
        </>
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
