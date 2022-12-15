import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import Popover from "./Popover";

export default {
  title: "UI/Floating UI/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = ({ ...args }) => (
  <div
    style={{
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Popover {...args} />
  </div>
);

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  children: (
    <>
      <Popover.Trigger>My trigger</Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>My popover description</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Content>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <Popover.Trigger>My trigger</Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>My popover description</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Content>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
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
    </>
  ),
};

export const Placement = Template.bind({});
Placement.args = {
  placement: "right",
  children: (
    <>
      <Popover.Trigger>
        <Button>My trigger</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Heading>My popover heading</Popover.Heading>
        <Popover.Description>My popover description</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Content>
    </>
  ),
};
