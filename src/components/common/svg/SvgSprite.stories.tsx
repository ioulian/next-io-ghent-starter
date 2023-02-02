import type { Meta, StoryObj } from "@storybook/react";
import iconSample2 from "@tabler/icons/icons/arrow-right-circle.svg";

import iconSample from "./../../../../public/img/logo-sprite.svg";
import SvgSprite from "./SvgSprite";

const icons = {
  iconSample,
  iconSample2,
};

const meta: Meta<typeof SvgSprite> = {
  tags: ["autodocs"],
  title: "UI/Icon",
  component: SvgSprite,
  argTypes: {
    src: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: Object.entries(icons).reduce((labels, [name, value]) => {
          // @ts-ignore
          labels[name] = value.id;
          return labels;
        }, {}),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SvgSprite>;

export const Default: Story = {
  args: {
    src: iconSample,
    title: "Svg icon",
  },
};
