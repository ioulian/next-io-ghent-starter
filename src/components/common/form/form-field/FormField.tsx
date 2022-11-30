import get from "lodash/get";
import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
  UseFormStateReturn,
} from "react-hook-form";
import { ReactI18NextChild } from "react-i18next";

import { InferComponentProps } from "@/types/styled";

import { Description } from "../description/Description";
import { Error } from "../error/Error";
import { Label } from "../label/Label";
import { getAriaDescribedBy, getDescriptionId, getErrorId } from "../utils";
import { BE_VALIDATION } from "../form/Form";

import { StyledFormField } from "./FormField.styles";

const BaseWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);

type RenderProps = (props: {
  field: ControllerRenderProps<FieldValues>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}) => ReactElement;

export const FormField: FC<
  {
    options?: RegisterOptions<FieldValues, FieldPath<FieldValues>>;
    name: string;
    label?: ReactNode;
    description?: ReactNode;
    inputWrapper?: FC<PropsWithChildren>;
    watchValidate?: any;
    children?: ReactI18NextChild | Iterable<ReactI18NextChild> | RenderProps;
  } & InferComponentProps<typeof StyledFormField>
> = ({
  name,
  label,
  description,
  inputWrapper: InputWrapper = BaseWrapper,
  options,
  children,
  watchValidate,
  ...props
}) => {
  const {
    register,
    unregister,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, [unregister, name]);

  const errorForThisField = get(errors, name);
  const registerProps = register(name, {
    ...options,
    ...(watchValidate?.(watch) ?? {}),
  });

  return (
    <StyledFormField $error={!!errorForThisField} {...props}>
      {label && (
        <Label htmlFor={name} required={!!options?.required}>
          {label}
        </Label>
      )}
      {typeof children === "function" ? (
        <InputWrapper>
          <Controller
            control={control}
            {...{ name, options }}
            render={children}
          />
        </InputWrapper>
      ) : (
        <InputWrapper>
          {Children.map(children, (child) =>
            // @ts-ignore
            child?.props
              ? cloneElement(child as ReactElement<any>, {
                  // @ts-ignore
                  ...child.props,
                  ...registerProps,
                  "aria-describedby": getAriaDescribedBy(
                    name,
                    !!description,
                    !!errorForThisField
                  ),
                  name,
                  id: name,
                })
              : null
          )}
        </InputWrapper>
      )}
      {errorForThisField && (
        <Error id={getErrorId(name)}>
          {
            // @ts-ignore
            errorForThisField.type === BE_VALIDATION
              ? (errorForThisField.message as unknown as string)
              : (errorForThisField.message as string)
          }
        </Error>
      )}
      {description && (
        <Description id={getDescriptionId(name)}>{description}</Description>
      )}
    </StyledFormField>
  );
};
