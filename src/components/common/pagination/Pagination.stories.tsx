import type { Meta, StoryObj } from "@storybook/react";
import iconChevronRight from "@tabler/icons/icons/chevron-right.svg";
import iconChevronLeft from "@tabler/icons/icons/chevron-left.svg";

import Pagination from "./Pagination";
import SvgSprite from "./../svg/SvgSprite";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => <Pagination {...args} />,
  args: {
    breakLabel: "...",
    nextLabel: <SvgSprite src={iconChevronRight} />,
    pageRangeDisplayed: 5,
    pageCount: 30,
    previousLabel: <SvgSprite src={iconChevronLeft} />,
  },
};
