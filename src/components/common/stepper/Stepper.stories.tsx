/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";

import Stepper from "./Stepper";
import Step from "./Step";

const meta: Meta<typeof Stepper> = {
  title: "UI/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
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

export const InlineSteps: Story = {
  render: (args) => (
    <Stepper {...args}>
      <Step state="complete" $inline>
        Choose materials
      </Step>
      <Step state="current" $inline>
        Drag & drop creation mode
      </Step>
      <Step state="future" $inline>
        Conversion
      </Step>
    </Stepper>
  ),
};
