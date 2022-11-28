import { ComponentPropsWithRef, JSXElementConstructor } from "react";
import {
  AnyStyledComponent,
  StyledComponentInnerComponent,
  StyledComponentInnerOtherProps,
} from "styled-components";

export type InferComponentProps<T> = T extends AnyStyledComponent
  ? ComponentPropsWithRef<StyledComponentInnerComponent<T>> &
      StyledComponentInnerOtherProps<T>
  : // eslint-disable-next-line no-undef
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
  ? ComponentPropsWithRef<T>
  : never;
