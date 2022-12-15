import { ComponentStory, ComponentMeta } from "@storybook/react";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";
import iconSettings from "@tabler/icons/settings.svg";

import Button from "./Button";
import SvgSprite from "./../svg/SvgSprite";

export default {
  title: "UI/Buttons/Button",
  component: Button,
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

export const Simple = Template.bind({});
Simple.args = {
  $type: "simple",
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
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
};

export const Normal = Template.bind({});
Normal.args = {
  $size: "normal",
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  $size: "small",
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
};

export const Base = Template.bind({});
Base.args = {
  $size: "base",
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
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
  iconBefore: <SvgSprite src={iconChevronLeft} title="test-title" />,
  children: "Button",
};

export const WithIconAfter = Template.bind({});
WithIconAfter.args = {
  $type: "primary",
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
};

export const WithIconBeforeAndAfter = Template.bind({});
WithIconBeforeAndAfter.args = {
  $type: "primary",
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
};

export const WithIsLoading = Template.bind({});
WithIsLoading.args = {
  $type: "primary",
  iconBefore: <SvgSprite src={iconChevronLeft} />,
  iconAfter: <SvgSprite src={iconChevronRight} />,
  children: "Button",
  isLoading: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  $size: "base",
  $type: "simple",
  iconBefore: <SvgSprite src={iconSettings} />,
  iconOnly: true,
  children: "Button",
};
