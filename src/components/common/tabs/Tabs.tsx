import { FC, memo } from "react";
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

if (process.env.NODE_ENV === "development") {
  Tabs.whyDidYouRender = true;
}

export default memo(Tabs);
