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
  render: (args) => (
    <div
      style={{
        width: "400px",
        height: "400px",
        background: "#eee",
      }}
    >
      <Spinner {...args} />
    </div>
  ),
  args: {
    $fullWidth: true,
    $fullHeight: true,
    label: "Loading...",
    //primaryColor: "#0042c2",
    //secondaryColor: "#b6c5c5",
  },
};
