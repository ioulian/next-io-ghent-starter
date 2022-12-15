import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import Dialog from "./Dialog";

export default {
  title: "UI/Floating UI/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = ({ ...args }) => (
  <div
    style={{
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Dialog {...args} />
  </div>
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  children: (
    <>
      <Dialog.Trigger>My trigger</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Heading>My dialog heading</Dialog.Heading>
        <Dialog.Description>My dialog description</Dialog.Description>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <Dialog.Trigger>My trigger</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Heading>My dialog heading</Dialog.Heading>
        <Dialog.Description>My dialog description</Dialog.Description>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
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
    </>
  ),
};
