import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "../text/Text";

import VisuallyHidden from "./VisuallyHidden";

export default {
  title: "UI/Visually Hidden",
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = ({ ...args }) => (
  <Text>
    <p>
      The text between (<VisuallyHidden {...args} />) is visually hidden, but
      still readable by screen readers.
    </p>
  </Text>
);

export const Default = Template.bind({});
Default.args = {
  children: "this text",
};
