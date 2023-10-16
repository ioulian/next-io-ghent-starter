/* eslint-disable i18next/no-literal-string */

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
type Story = StoryObj<typeof Dialog>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Trigger>My trigger</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Heading>My dialog heading</Dialog.Heading>
        <Dialog.Description>My dialog description</Dialog.Description>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog>
  ),
};

const ControlledDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={isOpen} onOpenChange={(isNewOpen) => setIsOpen(isNewOpen)}>
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
    </>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDialog />,
};

export const CustomElements: Story = {
  render: (args) => (
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
  ),
};
