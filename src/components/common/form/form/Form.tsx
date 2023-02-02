import { useEffect } from "react";
import {
  DeepPartial,
  FormProvider,
  Mode,
  Path,
  useForm,
} from "react-hook-form";

import { ApiError } from "@/types/error";
import { InferComponentProps } from "@/types/styled";

import ApiFormError from "../ApiFormError";

import { StyledForm } from "./Form.styles";

export const BE_VALIDATION: string = "BE";

// TODO: find a way to pass type to children, maybe use a function that we pass
// to form, from wich every child can get it types?
const Form = <T extends Record<string, any>>({
  isLoading,
  error,
  defaultValues,
  onSubmit,
  onChange,
  children,
  mode = "onChange",
  ...props
}: {
  error?: ApiError;
  defaultValues?: DeepPartial<T>;
  isLoading?: boolean;
  mode?: Mode;
  onSubmit: (data?: T) => void;
  onChange?: (data?: DeepPartial<T> | T) => void;
} & Omit<InferComponentProps<typeof StyledForm>, "onChange" | "onSubmit">) => {
  const methods = useForm<T>({ defaultValues, mode });
  const {
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    watch,
    setFocus,
    reset,
  } = methods;

  // Trigger onChange first time
  useEffect(() => {
    onChange?.(getValues());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subscribe to onChange event
  useEffect(() => {
    const subscription = watch((values) => {
      onChange?.(values);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, onChange]);

  // Show errors and set focus to first error field
  useEffect(() => {
    if (error) {
      error.violations?.forEach(({ propertyPath, message }, i) => {
        setError(propertyPath as Path<T>, {
          type: BE_VALIDATION,
          message,
        });

        if (i === 0) {
          try {
            // Can fail on HMR
            setFocus(propertyPath as Path<T>);
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
  }, [JSON.stringify(defaultValues)]);

  return (
    <FormProvider {...methods}>
      <StyledForm
        {...props}
        onSubmit={!isLoading ? handleSubmit(onSubmit) : () => {}}
      >
        {error && <ApiFormError error={error} />}
        {children}
      </StyledForm>
    </FormProvider>
  );
};
if (process.env.NODE_ENV === "development") {
  Form.whyDidYouRender = true;
}

export default Form;
