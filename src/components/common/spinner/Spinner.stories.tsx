import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  title: "UI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = ({ ...args }) => (
  <div
    style={{
      width: "400px",
      height: "400px",
      background: "#eee",
    }}
  >
    <Spinner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const FullSize = Template.bind({});
FullSize.args = {
  $fullWidth: true,
  $fullHeight: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  $fullWidth: true,
  $fullHeight: true,
  label: "Loading...",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  $fullWidth: true,
  $fullHeight: true,
  label: "Loading...",
  primaryColor: "#0042c2",
  secondaryColor: "#b6c5c5",
};
