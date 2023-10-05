/* eslint-disable i18next/no-literal-string */

import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import Button from "../button/Button";

import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Link href="/" passHref legacyBehavior>
        <Button as="a" $type="link" $size="base">
          Home
        </Button>
      </Link>
      <Link href="/parent-1" passHref legacyBehavior>
        <Button as="a" $type="link" $size="base">
          Parent 1
        </Button>
      </Link>
      <Link href="/parent-1/parent-2" passHref legacyBehavior>
        <Button as="a" $type="link" $size="base">
          Parent 2
        </Button>
      </Link>
      <Link href="/parent-1/parent-2/current" passHref legacyBehavior>
        <Button as="a" $type="link" $size="base">
          Current
        </Button>
      </Link>
    </Breadcrumb>
  ),
};
