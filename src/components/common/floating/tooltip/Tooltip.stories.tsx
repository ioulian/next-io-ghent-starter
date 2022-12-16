import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../button/Button";

import Tooltip from "./Tooltip";

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
      <Tooltip.Trigger>My trigger</Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <Tooltip.Trigger>My trigger</Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
      <Tooltip.Trigger>
        <Button>My trigger</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </>
  ),
};
