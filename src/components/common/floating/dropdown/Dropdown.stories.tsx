import type { Meta, StoryObj } from "@storybook/react";
import iconChevron from "@tabler/icons/chevron-right.svg";

import Button from "../../button/Button";
import SvgSprite from "../../svg/SvgSprite";

import Dropdown, { DropdownMenuItem } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Floating UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Dropdown {...args}>
        <DropdownMenuItem
          onClick={() => console.log("Undo")}
          typeaheadKey="Undo"
        >
          Undo
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Redo">Redo</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Cut" disabled>
          Cut
        </DropdownMenuItem>
        <Dropdown trigger="Copy as >" typeaheadKey="Copy as">
          <DropdownMenuItem typeaheadKey="Text">Text</DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Video">Video</DropdownMenuItem>
          <Dropdown trigger="Image >" typeaheadKey="Image">
            <DropdownMenuItem typeaheadKey=".png">.png</DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".jpg">.jpg</DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".svg">.svg</DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".gif">.gif</DropdownMenuItem>
          </Dropdown>
          <DropdownMenuItem typeaheadKey="Audio">Audio</DropdownMenuItem>
        </Dropdown>
        <Dropdown trigger="Share >" typeaheadKey="Share">
          <DropdownMenuItem typeaheadKey="Mail">Mail</DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Instagram">
            Instagram
          </DropdownMenuItem>
        </Dropdown>
      </Dropdown>
    </div>
  ),
  args: {
    trigger: "Menu",
  },
};

export const CustomElements: Story = {
  render: (args) => (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Dropdown {...args}>
        <DropdownMenuItem typeaheadKey="Undo">
          <Button $type="secondary">Undo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Redo">
          <Button $type="secondary">Redo</Button>
        </DropdownMenuItem>
        <DropdownMenuItem typeaheadKey="Cut" disabled>
          <Button>Cut</Button>
        </DropdownMenuItem>
        <Dropdown
          trigger={
            <Button iconAfter={<SvgSprite src={iconChevron} />}>Copy as</Button>
          }
          typeaheadKey="Copy as"
        >
          <DropdownMenuItem typeaheadKey="Text">
            <Button>Text</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Video">
            <Button>Video</Button>
          </DropdownMenuItem>
          <Dropdown
            trigger={
              <Button iconAfter={<SvgSprite src={iconChevron} />}>Image</Button>
            }
            typeaheadKey="Image"
          >
            <DropdownMenuItem typeaheadKey=".png">
              <Button>.png</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".jpg">
              <Button>.jpg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".svg">
              <Button>.svg</Button>
            </DropdownMenuItem>
            <DropdownMenuItem typeaheadKey=".gif">
              <Button>.gif</Button>
            </DropdownMenuItem>
          </Dropdown>
          <DropdownMenuItem typeaheadKey="Audio">
            <Button>Audio</Button>
          </DropdownMenuItem>
        </Dropdown>
        <Dropdown
          trigger={
            <Button iconAfter={<SvgSprite src={iconChevron} />}>Share</Button>
          }
          typeaheadKey="Share"
        >
          <DropdownMenuItem typeaheadKey="Mail">
            <Button>Mail</Button>
          </DropdownMenuItem>
          <DropdownMenuItem typeaheadKey="Instagram">
            <Button>Instagram</Button>
          </DropdownMenuItem>
        </Dropdown>
        ,
      </Dropdown>
    </div>
  ),
  args: {
    trigger: <Button>Menu</Button>,
  },
};
