import type { Meta, StoryObj } from "@storybook/react";

import Stepper from "./Stepper";
import Step from "./Step";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: (args) => (
    <Stepper {...args}>
      <Step state="complete">Step 1</Step>
      <Step state="current">Step 2</Step>
      <Step state="future">Step 3</Step>
    </Stepper>
  ),
};
