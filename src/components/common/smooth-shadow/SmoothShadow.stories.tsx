import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";

import { easings } from "@/utils/easings";

import { SmoothShadowOptionsType, createSmoothShadow } from "./utilities";
import { presetDefault } from "./presets";

const SmoothShadow: FC<SmoothShadowOptionsType> = (options) => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        boxShadow: createSmoothShadow(options),
      }}
    />
  );
};

const meta: Meta<typeof SmoothShadow> = {
  title: "Tools/Smooth shadow",
  component: SmoothShadow,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: { type: "color" },
    },
    startAlpha: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    endAlpha: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    startBlur: { control: { type: "range", min: 0, max: 200, step: 1 } },
    endBlur: { control: { type: "range", min: 0, max: 200, step: 1 } },
    layers: { control: { type: "range", min: 1, max: 10, step: 1 } },
    x: { control: { type: "range", min: 0, max: 200, step: 1 } },
    y: { control: { type: "range", min: 0, max: 200, step: 1 } },
    alphaEasing: {
      options: Object.keys(easings),
      mapping: easings,
      control: { type: "select" },
    },
    blurEasing: {
      options: Object.keys(easings),
      mapping: easings,
      control: { type: "select" },
    },
    distanceEasing: {
      options: Object.keys(easings),
      mapping: easings,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SmoothShadow>;

export const Example: Story = {
  args: presetDefault,
};
