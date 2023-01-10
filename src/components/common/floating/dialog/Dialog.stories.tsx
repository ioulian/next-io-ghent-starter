import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "UI/Floating UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

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
      <Dialog {...args}>
        <Dialog.Trigger>My trigger</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Heading>My dialog heading</Dialog.Heading>
          <Dialog.Description>My dialog description</Dialog.Description>
          <Dialog.Close>Close</Dialog.Close>
        </Dialog.Content>
      </Dialog>
    </div>
  ),
};

const ControlledDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Dialog open={isOpen}>
      <Dialog.Trigger
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        My trigger
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Heading>My dialog heading</Dialog.Heading>
        <Dialog.Description>My dialog description</Dialog.Description>
        <Dialog.Close
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </Dialog.Close>
      </Dialog.Content>
    </Dialog>
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
      <ControlledDialog />
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
      <Dialog {...args}>
        <Dialog.Trigger>
          <Button>My trigger</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Heading>
            <Heading>My popover heading</Heading>
          </Dialog.Heading>
          <Dialog.Description>
            <Text>
              <p>My popover description</p>
            </Text>
          </Dialog.Description>
          <Dialog.Close>
            <Button>Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog>
    </div>
  ),
};
