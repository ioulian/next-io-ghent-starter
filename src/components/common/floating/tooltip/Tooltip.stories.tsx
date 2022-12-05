import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../button/Button";

import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

export default {
  title: "UI/Floating UI/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ ...args }) => (
  <Tooltip {...args} />
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
  children: (
    <>
      <Tooltip open={true}>
        <TooltipTrigger>My trigger</TooltipTrigger>
        <TooltipContent>My tooltip</TooltipContent>
      </Tooltip>
    </>
  ),
};

export const AsChild = Template.bind({});
AsChild.args = {
  children: (
    <>
      <TooltipTrigger asChild>
        <Button>My trigger</Button>
      </TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </>
  ),
};
