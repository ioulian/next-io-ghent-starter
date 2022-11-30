import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledTextarea } from "./Textarea.styles";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  InferComponentProps<typeof StyledTextarea>
>(({ ...props }, ref) => {
  return <StyledTextarea cols={40} rows={5} {...props} ref={ref} />;
});

TextArea.displayName = "TextArea";
