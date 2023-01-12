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
type Story = StoryObj<typeof Popover>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>My trigger</Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>My popover description</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Content>
    </Popover>
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
  render: () => <ControlledPopover />,
};

export const CustomElements: Story = {
  render: (args) => (
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
  ),
};

export const Placement: Story = {
  render: (args) => (
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
  ),
  args: {
    placement: "right",
  },
};
