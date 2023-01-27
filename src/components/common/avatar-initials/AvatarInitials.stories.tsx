import type { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";

import { getAvatarInitials } from "./utilities";

const AvatarInitials: FC<{
  initials: string;
  backgroundColor: string;
  textColor?: string;
}> = ({ initials, backgroundColor, textColor }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      style={{
        width: 42,
        height: 42,
        overflow: "hidden",
        borderRadius: "50%",
      }}
      src={getAvatarInitials(initials, backgroundColor, textColor)}
      alt=""
    />
  );
};

const meta: Meta<typeof AvatarInitials> = {
  title: "UI/Avatar Initials",
  component: AvatarInitials,
};
export default meta;
type Story = StoryObj<typeof AvatarInitials>;

export const Example: Story = {
  args: {
    backgroundColor: "rgb(3, 131, 135)",
    textColor: "#fff",
    initials: "YA",
  },
};
