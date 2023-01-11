import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "UI/Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    type: "h1",
    size: "display",
    children: "Heading",
  },
};
