import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "./Label";

export default {
  title: "UI/Form/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Naam moodboard",
};
