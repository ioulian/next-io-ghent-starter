import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Overlay } from "./Overlay";

export default {
  title: "UI/Overlay",
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = ({ ...args }) => (
  <Overlay {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      this is a modal
    </div>
  ),
};
