import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExpandButton } from "./ExpandButton";

export default {
  title: "UI/ExpandButton",
  component: ExpandButton,
} as ComponentMeta<typeof ExpandButton>;

const Template: ComponentStory<typeof ExpandButton> = ({ ...args }) => (
  <ExpandButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  trigger: <button>trigger element</button>,
  children: <>Open</>,
};
