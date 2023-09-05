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
  Path,
  RegisterOptions,
  useFormContext,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "next-i18next";
import merge from "lodash/merge";

import { InferComponentProps } from "@/types/styled";

import Description from "../description/Description";
import Error from "../error/Error";
import Label from "../label/Label";
import { getAriaDescribedBy, getDescriptionId, getErrorId } from "../utils";
import { BE_VALIDATION } from "../form/Form";

import { StyledFormField } from "./FormField.styles";

const BaseWrapper: FC<{ children?: ReactNode }> = ({ children }) => children;

type RenderProps<T extends Record<string, any>> = (props: {
  field: ControllerRenderProps<T, FieldPath<T>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
  props: {
    "aria-describedby"?: string;
    "aria-invalid"?: "false" | "true";
    id: string;
  };
}) => ReactElement;

const FormField = <T extends Record<string, any>>({
  asFieldSet,
  name,
  label,
  description,
  inputWrapper: InputWrapper = BaseWrapper,
  options,
  children,
  watchValidate,
  ...props
}: {
  asFieldSet?: boolean;
  options?: RegisterOptions<T, FieldPath<T>>;
  name: Path<T>;
  label?: ReactNode;
  description?: ReactNode;
  inputWrapper?: FC<PropsWithChildren>;
  watchValidate?: any;
  children?:
    | ReactElement<any, JSXElementConstructor<any>>
    | ReactElement<any, JSXElementConstructor<any>>[]
    | RenderProps<T>;
} & Omit<InferComponentProps<typeof StyledFormField>, "children">) => {
  const { register, unregister, watch, control, formState, getFieldState } =
    useFormContext<T>();
  const { t } = useTranslation("common");

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, [unregister, name]);

  const { error } = getFieldState(name, formState);
  const registerProps = register(
    name,
    merge(options, watchValidate ? watchValidate(watch) : {}),
  );
  const describedBy = getAriaDescribedBy(name, !!description, !!error);

  return (
    <StyledFormField
      as={asFieldSet ? "fieldset" : "div"}
      $error={!!error}
      {...props}
    >
      {!!label && (
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
            render={(args) => {
              return children({
                ...args,
                props: {
                  id: name,
                  ...(describedBy && { "aria-describedby": describedBy }),
                  ...(error && { "aria-invalid": "true" }),
                },
              });
            }}
          />
        </InputWrapper>
      ) : (
        <InputWrapper>
          {Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child as ReactElement<any>, {
                  ...child.props,
                  ...registerProps,
                  name,
                  id: name,
                  ...(describedBy && { "aria-describedby": describedBy }),
                  ...(error && { "aria-invalid": "true" }),
                })
              : null,
          )}
        </InputWrapper>
      )}
      {error ? (
        <Error id={getErrorId(name)}>
          {error.type === BE_VALIDATION
            ? (error.message as unknown as string)
            : (t(
                // @ts-ignore
                `form.validationErrors.${error.message as string}`,
              ) as string)}
        </Error>
      ) : null}
      {description ? (
        <Description id={getDescriptionId(name)}>{description}</Description>
      ) : null}
    </StyledFormField>
  );
};

if (process.env.NODE_ENV === "development") {
  FormField.whyDidYouRender = true;
}

export default FormField;
