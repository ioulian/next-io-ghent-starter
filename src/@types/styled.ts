import { ComponentPropsWithRef, JSXElementConstructor } from "react";

export type InferComponentProps<T> = T extends
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<any>
  ? ComponentPropsWithRef<T>
  : never;
