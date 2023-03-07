import type { Meta, StoryObj } from "@storybook/react";

import Expandable from "./Expandable";

const meta: Meta<typeof Expandable> = {
  title: "UI/Expandable",
  component: Expandable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Expandable>;

export const Default: Story = {
  args: {
    summary: "Click to expand",
    children: "More details ...",
  },
};

export const OpenByDefault: Story = {
  args: {
    open: true,
    onToggle: (isOpen) => {
      console.log(isOpen);
    },
    summary: "Click to expand",
    children: "More details ...",
  },
};
