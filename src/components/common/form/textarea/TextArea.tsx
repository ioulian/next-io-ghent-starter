import { forwardRef } from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledTextarea } from "./Textarea.styles";

const TextArea = forwardRef<
  HTMLTextAreaElement,
  InferComponentProps<typeof StyledTextarea>
>(({ ...props }, ref) => {
  return <StyledTextarea cols={40} rows={5} {...props} ref={ref} />;
});

if (process.env.NODE_ENV !== "production") {
  TextArea.displayName = "TextArea";
}

export default TextArea;
