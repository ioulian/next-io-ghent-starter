import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../button/Button";

import { ContextMenu } from "./ContextMenu";

export default {
  title: "UI/ContextMenu",
  component: ContextMenu,
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = ({ ...args }) => (
  <ContextMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  trigger: <Button>trigger element (auto placement)</Button>,
  children: <>Content</>,
};

export const PlacementAutoStart = Template.bind({});
PlacementAutoStart.args = {
  placement: "auto-start",
  trigger: <button>trigger element (auto-start placement)</button>,
  children: <>Content</>,
};

export const PlacementAutoEnd = Template.bind({});
PlacementAutoEnd.args = {
  placement: "auto-start",
  trigger: <button>trigger element (auto-end placement)</button>,
  children: <>Content</>,
};

export const PlacementBottom = Template.bind({});
PlacementBottom.args = {
  placement: "bottom",
  trigger: <Button>trigger element (bottom placement)</Button>,
  children: <>Content</>,
};
