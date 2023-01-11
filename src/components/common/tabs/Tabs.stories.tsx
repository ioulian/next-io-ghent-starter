import type { Meta, StoryObj } from "@storybook/react";
import { Tab, TabList, TabPanel } from "react-tabs";

import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TabList>
          <Tab>
            <span>Characteristics</span>
          </Tab>
          <Tab>
            <span>Plans &amp; pictures</span>
          </Tab>
          <Tab>
            <span>Moodboard</span>
          </Tab>
          <Tab>
            <span>Documentation</span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Characteristics content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Plans &amp; pictures content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Moodboard content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Documentation content</h2>
        </TabPanel>
      </>
    ),
  },
};
