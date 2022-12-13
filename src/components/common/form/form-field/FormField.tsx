import get from "lodash/get";
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  JSXElementConstructor,
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
import { useTranslation } from "react-i18next";

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
  field: ControllerRenderProps<FieldValues, FieldPath<FieldValues>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}) => ReactElement;

export const FormField: FC<
  {
    asFieldSet?: boolean;
    options?: RegisterOptions<FieldValues, FieldPath<FieldValues>>;
    name: string;
    label?: ReactNode;
    description?: ReactNode;
    inputWrapper?: FC<PropsWithChildren>;
    watchValidate?: any;
    children?:
      | ReactElement<any, JSXElementConstructor<any>>
      | ReactElement<any, JSXElementConstructor<any>>[]
      | RenderProps;
  } & Omit<InferComponentProps<typeof StyledFormField>, "children">
> = ({
  asFieldSet,
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
  const { t } = useTranslation("common");

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
    <StyledFormField
      as={asFieldSet ? "fieldset" : "div"}
      $error={!!errorForThisField}
      {...props}
    >
      {label && (
        <Label
          as={asFieldSet ? "legend" : "label"}
          htmlFor={asFieldSet ? undefined : name}
          required={!!options?.required}
        >
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
            isValidElement(child)
              ? cloneElement(child as ReactElement<any>, {
                  ...child.props,
                  ...registerProps,
                  "aria-describedby": getAriaDescribedBy(
                    name,
                    !!description,
                    !!errorForThisField
                  ),
                  name,
                  id: name,
                  ...(errorForThisField && { "aria-invalid": "true" }),
                })
              : null
          )}
        </InputWrapper>
      )}
      {errorForThisField && (
        <Error id={getErrorId(name)}>
          {errorForThisField.type === BE_VALIDATION
            ? (errorForThisField.message as unknown as string)
            : (t(
                // @ts-ignore
                `form.validationErrors.${errorForThisField.message as string}`
              ) as string)}
        </Error>
      )}
      {description && (
        <Description id={getDescriptionId(name)}>{description}</Description>
      )}
    </StyledFormField>
  );
};
