import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "UI/Typography/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = ({ ...args }) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Heading",
};

export const Display = Template.bind({});
Display.args = {
  children: "Display",
  type: "h1",
  size: "display",
};

export const H1 = Template.bind({});
H1.args = {
  children: "Heading H1",
  type: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  children: "Heading H2",
  type: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  children: "Heading H3",
  type: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  children: "Heading H4",
  type: "h4",
};
