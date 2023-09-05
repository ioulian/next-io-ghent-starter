import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";

import { easings } from "@/utils/easings";

import { createEasingGradient } from "./utilities";

const EasingGradient: FC<{
  from: string;
  to: string;
  useEasing?: boolean;
  direction?: number;
  stops?: number;
  easing?: string;
}> = ({
  from,
  to,
  useEasing = false,
  stops = 16,
  direction = 0,
  easing = "cubic-bezier(0.5, 0, 0.5, 1)",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: `linear-gradient(${direction}deg, ${
          useEasing
            ? createEasingGradient(from, to, easing, stops)
            : `${from}, ${to}`
        })`,
      }}
    />
  );
};

const meta: Meta<typeof EasingGradient> = {
  title: "Tools/Easing Gradient",
  component: EasingGradient,
  argTypes: {
    from: {
      control: { type: "color" },
    },
    to: {
      control: { type: "color" },
    },
    direction: { control: { type: "range", min: 0, max: 360, step: 1 } },
    stops: { control: { type: "range", min: 0, max: 100, step: 1 } },
    easing: {
      options: Object.keys(easings),
      mapping: easings,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof EasingGradient>;

export const Example: Story = {
  args: {
    from: "rgba(129,254,233,1)",
    to: "rgba(246,110,255,1)",
    useEasing: true,
    direction: 0,
    stops: 16,
    easing: easings.easeInOutQuad,
  },
};
