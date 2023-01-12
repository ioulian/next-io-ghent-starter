import { FC } from "react";
import { Tabs as ReactTabs } from "react-tabs";

import { InferComponentProps } from "@/types/styled";

import { StyledTabs } from "./Tabs.styles";

const Tabs: FC<InferComponentProps<typeof ReactTabs>> = ({
  children,
  ...props
}) => {
  return (
    <StyledTabs>
      <ReactTabs {...props}>{children}</ReactTabs>
    </StyledTabs>
  );
};

export default Tabs;