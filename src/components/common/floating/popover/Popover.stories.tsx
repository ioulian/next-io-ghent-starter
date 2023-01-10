import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import Popover from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "UI/Floating UI/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
      <Popover {...args}>
        <Popover.Trigger>My trigger</Popover.Trigger>
        <Popover.Content>
          <Popover.Heading>My popover heading</Popover.Heading>
          <Popover.Description>My popover description</Popover.Description>
          <Popover.Close>Close</Popover.Close>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

const ControlledPopover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Popover open={isOpen}>
      <Popover.Trigger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        My trigger
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>My popover description</Popover.Description>
        <Popover.Close
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </Popover.Close>
      </Popover.Content>
    </Popover>
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
      <ControlledPopover />
    </div>
  ),
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
      <Popover {...args}>
        <Popover.Trigger>
          <Button>My trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Heading>
            <Heading>My popover heading</Heading>
          </Popover.Heading>
          <Popover.Description>
            <Text>
              <p>My popover description</p>
            </Text>
          </Popover.Description>
          <Popover.Close>
            <Button>Close</Button>
          </Popover.Close>
        </Popover.Content>
      </Popover>
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
      <Popover {...args}>
        <Popover.Trigger>
          <Button>My trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Heading>My popover heading</Popover.Heading>
          <Popover.Description>My popover description</Popover.Description>
          <Popover.Close>Close</Popover.Close>
        </Popover.Content>
      </Popover>
    </div>
  ),
  args: {
    placement: "right",
  },
};
