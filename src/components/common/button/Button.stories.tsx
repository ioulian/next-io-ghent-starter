/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import iconChevronRight from "@tabler/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/chevron-left.svg";
import iconSettings from "@tabler/icons/settings.svg";
import Link from "next/link";

import Tooltip from "../floating/tooltip/Tooltip";

import Button from "./Button";
import SvgSprite from "./../svg/SvgSprite";

const meta: Meta<typeof Button> = {
  title: "UI/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
  args: {
    $type: "primary",
    children: "Button",
    disabled: false,
    isLoading: false,
    iconOnly: false,
    $fullWidth: false,
    $size: "normal",
  },
};

export const WithIcons: Story = {
  render: (args) => <Button {...args} />,
  args: {
    $type: "primary",
    children: "Button",
    disabled: false,
    isLoading: false,
    iconOnly: false,
    $fullWidth: false,
    $size: "normal",
    iconBefore: <SvgSprite src={iconChevronLeft} title="test-title" />,
    iconAfter: <SvgSprite src={iconChevronRight} title="test-title" />,
  },
};

export const IconOnly: Story = {
  render: (args) => <Button {...args} />,
  args: {
    $size: "base",
    $type: "simple",
    children: "Settings",
    disabled: false,
    isLoading: false,
    $fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const AccessibleIconButton: Story = {
  render: (args) => (
    <Tooltip placement="bottom">
      <Tooltip.Trigger>
        <Button {...args} />
      </Tooltip.Trigger>
      <Tooltip.Content>Settings</Tooltip.Content>
    </Tooltip>
  ),
  args: {
    $size: "base",
    $type: "simple",
    children: "Settings",
    disabled: false,
    isLoading: false,
    $fullWidth: false,
    iconBefore: <SvgSprite src={iconSettings} />,
    iconOnly: true,
  },
};

export const NextLink: Story = {
  render: (args) => (
    <Link href="/test" passHref legacyBehavior target="_blank">
      <Button {...args} />
    </Link>
  ),
  args: {
    $type: "primary",
    as: "a",
    children: "Navigate to another page",
    disabled: false,
    isLoading: false,
    iconOnly: false,
    $fullWidth: false,
    $size: "normal",
    iconAfter: <SvgSprite src={iconChevronRight} />,
  },
};
