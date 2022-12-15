import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../button/Button";
import Heading from "../../heading/Heading";
import Text from "../../text/Text";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from "./Popover";

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
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </>
  ),
};

export const Controlled = Template.bind({});
Controlled.args = {
  open: true,
  children: (
    <>
      <PopoverTrigger>My trigger</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </>
  ),
};

export const CustomElements = Template.bind({});
CustomElements.args = {
  children: (
    <>
      <PopoverTrigger>
        <Button>My trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>
          <Heading>My popover heading</Heading>
        </PopoverHeading>
        <PopoverDescription>
          <Text>
            <p>My popover description</p>
          </Text>
        </PopoverDescription>
        <PopoverClose>
          <Button>Close</Button>
        </PopoverClose>
      </PopoverContent>
    </>
  ),
};

export const Placement = Template.bind({});
Placement.args = {
  placement: "right",
  children: (
    <>
      <PopoverTrigger>
        <Button>My trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>My popover heading</PopoverHeading>
        <PopoverDescription>My popover description</PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </>
  ),
};
