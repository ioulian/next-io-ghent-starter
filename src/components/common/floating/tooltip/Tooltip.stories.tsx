/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";

import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Floating UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Tooltip.Trigger>My trigger</Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

const ControlledTooltip = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Tooltip open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
      <Tooltip.Trigger
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        My trigger
      </Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </Tooltip>
  );
};

export const Controlled: Story = {
  render: () => <ControlledTooltip />,
  args: {
    open: true,
  },
};

export const CustomElements: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Tooltip.Trigger>
        <Button>My trigger</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Tooltip.Trigger>
        <Button>My trigger</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>My tooltip</Tooltip.Content>
    </Tooltip>
  ),
  args: {
    placement: "right",
  },
};
