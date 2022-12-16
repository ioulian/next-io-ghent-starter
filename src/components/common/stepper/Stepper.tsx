import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
} from "react";

import { InferComponentProps } from "@/types/styled";

import { StyledSpacer, StyledStepper } from "./Stepper.styles";

const Stepper: FC<InferComponentProps<typeof StyledStepper>> = ({
  children,
  ...props
}) => {
  const totalChildren = Children.count(children);
  return (
    <StyledStepper {...props}>
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <>
            {cloneElement(child as ReactElement<any>, {
              ...child.props,
              index,
            })}
            {index !== totalChildren - 1 && <StyledSpacer />}
          </>
        ) : null
      )}
    </StyledStepper>
  );
};

export default Stepper;
