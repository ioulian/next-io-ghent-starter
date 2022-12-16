import { FC } from "react";

import { InferComponentProps } from "@/types/styled";

import {
  StyledStep,
  StyledStepContent,
  StyledStepIndicator,
} from "./Stepper.styles";

const Step: FC<
  {
    index?: number;
    state: "complete" | "current" | "future";
  } & InferComponentProps<typeof StyledStep>
> = ({ index, state, children, ...props }) => {
  return (
    <StyledStep
      {...props}
      $state={state}
      aria-current={state === "current" ? "step" : "false"}
    >
      <StyledStepIndicator>{(index ?? 0) + 1}</StyledStepIndicator>
      <StyledStepContent>{children}</StyledStepContent>
    </StyledStep>
  );
};

export default Step;
