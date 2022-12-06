import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../button/Button";

import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

export default {
  title: "UI/Floating UI/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ ...args }) => (
  <div
    style={{
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  children: (
    <>
      <TooltipTrigger>My trigger</TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <TooltipTrigger>My trigger</TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
      <TooltipTrigger>
        <Button>My trigger</Button>
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </>
  ),
};

export const Placement = Template.bind({});
Placement.args = {
  placement: "right",
  children: (
    <>
      <TooltipTrigger>
        <Button>My trigger</Button>
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </>
  ),
};
