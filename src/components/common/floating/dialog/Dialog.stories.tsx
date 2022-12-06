import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../button/Button";
import { Heading } from "../../heading/Heading";
import { Text } from "../../text/Text";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogTrigger,
} from "./Dialog";

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
      <DialogTrigger>My trigger</DialogTrigger>
      <DialogContent>
        <DialogHeading>My dialog heading</DialogHeading>
        <DialogDescription>My dialog description</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <DialogTrigger>My trigger</DialogTrigger>
      <DialogContent>
        <DialogHeading>My dialog heading</DialogHeading>
        <DialogDescription>My dialog description</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
      <DialogTrigger>
        <Button>My trigger</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeading>
          <Heading>My popover heading</Heading>
        </DialogHeading>
        <DialogDescription>
          <Text>
            <p>My popover description</p>
          </Text>
        </DialogDescription>
        <DialogClose>
          <Button>Close</Button>
        </DialogClose>
      </DialogContent>
    </>
  ),
};
