import { ComponentStory, ComponentMeta } from "@storybook/react";
import iconChevron from "@tabler/icons/chevron-right.svg";

import { Button } from "../../button/Button";
import { SvgSprite } from "../../svg/SvgSprite";

import { Dropdown, DropdownMenuItem } from "./Dropdown";

export default {
  title: "UI/Floating UI/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...args }) => (
  <div
    style={{
      width: "100%",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Dropdown {...args} />
  </div>
);

// children is an array to be able to pass children directly (instead inside of
// a fragment). Key is also not needed when using this component.
export const Basic = Template.bind({});
Basic.args = {
  trigger: "Menu",
  children: [
    <DropdownMenuItem
      key="1"
      onClick={() => console.log("Undo")}
      typeaheadKey="Undo"
    >
      Undo
    </DropdownMenuItem>,
    <DropdownMenuItem key="2" typeaheadKey="Redo">
      Redo
    </DropdownMenuItem>,
    <DropdownMenuItem key="3" typeaheadKey="Cut" disabled>
      Cut
    </DropdownMenuItem>,
    <Dropdown key="4" trigger="Copy as >" typeaheadKey="Copy as">
      <DropdownMenuItem typeaheadKey="Text">Text</DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Video">Video</DropdownMenuItem>
      <Dropdown trigger="Image >" typeaheadKey="Image">
        <DropdownMenuItem typeaheadKey=".png">.png</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey=".jpg">.jpg</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey=".svg">.svg</DropdownMenuItem>
        <DropdownMenuItem typeaheadKey=".gif">.gif</DropdownMenuItem>
      </Dropdown>
      <DropdownMenuItem typeaheadKey="Audio">Audio</DropdownMenuItem>
    </Dropdown>,
    <Dropdown key="6" trigger="Share >" typeaheadKey="Share">
      <DropdownMenuItem typeaheadKey="Mail">Mail</DropdownMenuItem>
      <DropdownMenuItem typeaheadKey="Instagram">Instagram</DropdownMenuItem>
    </Dropdown>,
  ],
};

// children is an array to be able to pass children directly (instead inside of
// a fragment). Key is also not needed when using this component.
export const CustomElements = Template.bind({});
CustomElements.args = {
  trigger: <Button>Menu</Button>,
  children: [
    <DropdownMenuItem key="1" typeaheadKey="Undo">
      <Button $type="secondary">Undo</Button>
    </DropdownMenuItem>,
    <DropdownMenuItem key="2" typeaheadKey="Redo">
      <Button $type="secondary">Redo</Button>
    </DropdownMenuItem>,
    <DropdownMenuItem key="3" typeaheadKey="Cut" disabled>
      <Button>Cut</Button>
    </DropdownMenuItem>,
    <Dropdown
      key="4"
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
    </Dropdown>,
    <Dropdown
      key="5"
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
    </Dropdown>,
  ],
};
