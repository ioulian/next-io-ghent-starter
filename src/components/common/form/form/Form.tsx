import { forwardRef, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ApiError } from "@/types/error";
import { InferComponentProps } from "@/types/styled";

import { ApiFormError } from "../ApiFormError";

import { StyledForm } from "./Form.styles";

export const BE_VALIDATION: string = "BE";

export const Form = forwardRef<
  HTMLFormElement,
  {
    error?: ApiError;
    defaultValues?: any;
    isLoading?: boolean;
    onSubmit: (data: any) => void;
    onChange?: (data: any) => void;
  } & InferComponentProps<typeof StyledForm>
>(
  (
    { isLoading, error, defaultValues, onSubmit, onChange, children, ...props },
    ref
  ) => {
    const methods = useForm({ defaultValues, mode: "onChange" });
    const {
      handleSubmit,
      getValues,
      setError,
      clearErrors,
      watch,
      setFocus,
      reset,
    } = methods;

    useEffect(() => {
      onChange?.(getValues());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const subscription = watch((values) => {
        onChange?.(values);
      });
      return () => {
        subscription.unsubscribe();
      };
    }, [watch, onChange]);

    useEffect(() => {
      if (error) {
        error.violations?.forEach(({ propertyPath, message }, i) => {
          setError(propertyPath, {
            type: BE_VALIDATION,
            message,
          });

          if (i === 0) {
            try {
              // Can fail on HMR
              setFocus(propertyPath);
            } catch (e) {}
          }
        });
      } else {
        clearErrors();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    // Update form when defaultValues change
    useEffect(() => {
      reset(defaultValues);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValues]);

    return (
      <FormProvider {...methods}>
        <StyledForm
          ref={ref}
          {...props}
          onSubmit={!isLoading ? handleSubmit(onSubmit) : () => {}}
        >
          {error && <ApiFormError error={error} />}
          {children}
        </StyledForm>
      </FormProvider>
    );
  }
);

Form.displayName = "Form";
