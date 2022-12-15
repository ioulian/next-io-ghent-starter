import { ComponentStory, ComponentMeta } from "@storybook/react";

import Expandable from "./Expandable";

export default {
  title: "UI/Expandable",
  component: Expandable,
} as ComponentMeta<typeof Expandable>;

const Template: ComponentStory<typeof Expandable> = ({ ...args }) => (
  <Expandable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  summary: "Click to expand",
  children: "More details ...",
};
