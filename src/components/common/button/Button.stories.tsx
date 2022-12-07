import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { Spinner } from "./../spinner/Spinner";
import { SvgSprite } from "./../svg/SvgSprite";
import iconSample from "./../../../../public/img/logo-sprite.svg";

export default {
  title: "UI/Buttons/Button",
  component: Button,
  subcomponents: { SvgSprite, Spinner },
  argTypes: {
    $type: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    $size: {
      options: ["normal", "large"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  $type: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  $type: "secondary",
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  $type: "primary",
  disabled: true,
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  $size: "large",
  children: "Button",
};

export const Normal = Template.bind({});
Normal.args = {
  $size: "normal",
  children: "Button",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  $type: "primary",
  $fullWidth: true,
  children: "Button",
};

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  $type: "primary",
  iconBefore: <SvgSprite src={iconSample} title="test-title" />,
  children: "Button",
};

export const WithIconAfter = Template.bind({});
WithIconAfter.args = {
  $type: "primary",
  iconAfter: <SvgSprite src={iconSample} />,
  children: "Button",
};

export const WithIconBeforeAndAfter = Template.bind({});
WithIconBeforeAndAfter.args = {
  $type: "primary",
  iconBefore: <SvgSprite src={iconSample} />,
  iconAfter: <SvgSprite src={iconSample} />,
  children: "Button",
};

export const WithIsLoading = Template.bind({});
WithIsLoading.args = {
  $type: "primary",
  iconBefore: <SvgSprite src={iconSample} />,
  iconAfter: <SvgSprite src={iconSample} />,
  children: "Button",
  isLoading: true,
};
