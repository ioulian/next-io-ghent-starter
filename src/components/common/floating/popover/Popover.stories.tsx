/* eslint-disable i18next/no-literal-string */

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

export const PopoverInPopover: Story = {
  render: (args) => (
    <Popover {...args}>
      <Popover.Trigger>My trigger</Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>
          My popover description
          <Popover>
            <Popover.Trigger>My trigger 2</Popover.Trigger>
            <Popover.Content>
              <Popover.Heading>My popover heading 2</Popover.Heading>
              <Popover.Description>
                My popover description 2
              </Popover.Description>
              <Popover.Close>Close 2</Popover.Close>
            </Popover.Content>
          </Popover>
        </Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Content>
    </Popover>
  ),
};

const ControlledPopover = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Popover open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
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
