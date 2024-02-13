import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    children: "Loading...",
  },
};

export const WithCustomColors: Story = {
  args: {
    $fullWidth: true,
    $fullHeight: true,
    primaryColor: "#fff",
    secondaryColor: "#647373",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
};

export const FullWidth: Story = {
  args: {
    $fullWidth: true,
    $fullHeight: true,
  },
};
