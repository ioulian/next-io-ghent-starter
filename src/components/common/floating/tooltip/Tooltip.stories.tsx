import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";

import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Floating UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Uncontrolled: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip {...args}>
        <Tooltip.Trigger>My trigger</Tooltip.Trigger>
        <Tooltip.Content>My tooltip</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};

const ControlledTooltip = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Tooltip open={isOpen}>
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
  render: () => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ControlledTooltip />
    </div>
  ),
  args: {
    open: true,
  },
};

export const CustomElements: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <Button>My trigger</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>My tooltip</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <Button>My trigger</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>My tooltip</Tooltip.Content>
      </Tooltip>
    </div>
  ),
  args: {
    placement: "right",
  },
};
