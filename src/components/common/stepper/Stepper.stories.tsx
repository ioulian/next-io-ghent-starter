import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stepper from "./Stepper";
import Step from "./Step";

export default {
  title: "UI/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = ({ ...args }) => (
  <Stepper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Step key="1" state="complete">
      Step 1
    </Step>,
    <Step key="2" state="current">
      Step 2
    </Step>,
    <Step key="3" state="future">
      Step 3
    </Step>,
  ],
};
