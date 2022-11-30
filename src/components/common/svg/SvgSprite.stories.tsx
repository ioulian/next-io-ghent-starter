import { ComponentStory, ComponentMeta } from "@storybook/react";

import iconSample from "./../../../../public/img/logo-sprite.svg";
import { SvgSprite } from "./SvgSprite";

const icons = {
  iconSample,
};

export default {
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
} as ComponentMeta<typeof SvgSprite>;

const Template: ComponentStory<typeof SvgSprite> = ({ ...args }) => (
  <SvgSprite style={{ width: 24, height: 24 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: iconSample,
  title: "Svg icon",
};
