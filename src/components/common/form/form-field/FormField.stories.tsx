import type { Meta, StoryObj } from "@storybook/react";
import ReactSelect from "react-select";
import icon from "@tabler/icons/at.svg";
import searchIcon from "@tabler/icons/search.svg";

import { email, required } from "../rules";
import Form from "../form/Form";
import Select from "../select/Select";
import TextArea from "../textarea/TextArea";
import SingleCheckbox from "../single-checkbox/SingleCheckbox";
import Radio from "../collection/radio/Radio";
import List from "../collection/List";
import Checkbox from "../collection/checkbox/Checkbox";
import SvgSprite from "../../svg/SvgSprite";
import Toggle from "../toggle/Toggle";
import ReactSelectContainer from "../react-select/ReactSelect";
import PasswordInput from "../input/PasswordInput";

import Input from "./../input/Input";
import FormField from "./FormField";

const ExampleApiError = {
  type: "https://tools.ietf.org/html/rfc2616#section-10",
  title: "An error occurred",
  message: "emailAddress: This value is not a valid email address.",
  error_code: "emailAddress: This value is not a valid email address.",
  violations: [
    {
      propertyPath: "emailAddress",
      message: "This value is not a valid email address.",
      code: "bd79c0ab-ddba-46cc-a703-a7a4b08de310",
    },
  ],
};

const meta: Meta<typeof FormField> = {
  title: "UI/Form/FormField",
  component: FormField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: (args) => (
    <Form onSubmit={() => {}} error={ExampleApiError}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Email Address",
    name: "emailAddress",
    options: {
      ...required,
      ...email,
    },
    description: "Description",
    children: <Input iconBefore={<SvgSprite src={icon} />} />,
  },
};

export const WithSearch: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Search",
    name: "search",
    children: (
      <Input type="search" iconBefore={<SvgSprite src={searchIcon} />} />
    ),
  },
};

export const WithPassword: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Password",
    name: "password",
    children: <PasswordInput />,
  },
};

export const WithSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Role",
    name: "emailAddress",
    options: {
      ...required,
    },
    description: "Description",
    children: (
      <Select addEmptyOption>
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </Select>
    ),
  },
};

export const WithTextarea: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Textarea",
    name: "emailAddress",
    options: {
      ...required,
    },
    description: "Description",
    children: <TextArea />,
  },
};

export const WithSingleCheckbox: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "I accept privacy policy",
    name: "emailAddress",
    $isToggle: true,
    options: {
      ...required,
    },
    children: <SingleCheckbox />,
  },
};

export const WithToggle: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "I accept privacy policy",
    name: "emailAddress",
    $isToggle: true,
    options: {
      ...required,
    },
    children: <Toggle />,
  },
};

export const WithRadioList: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args}>
        <Radio inputValue="value1">Value 1</Radio>
        <Radio inputValue="value2">Value 2</Radio>
        <Radio inputValue="value3">Value 3</Radio>
      </FormField>
    </Form>
  ),
  args: {
    label: "Choose one",
    name: "emailAddress",
    options: {
      ...required,
    },
    inputWrapper: List,
    asFieldSet: true,
  },
};

export const WithCheckboxList: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args}>
        <Checkbox inputValue="value1">Value 1</Checkbox>
        <Checkbox inputValue="value2">Value 2</Checkbox>
        <Checkbox inputValue="value3">Value 3</Checkbox>
      </FormField>
    </Form>
  ),
  args: {
    label: "Choose one",
    name: "emailAddress",
    options: {
      ...required,
    },
    inputWrapper: List,
    asFieldSet: true,
  },
};

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const WithReactSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "emailAddress",
    inputWrapper: ReactSelectContainer,
    options: {
      ...required,
    },
    asFieldSet: true,
    children: ({ field, props: { id, ...props } }) => (
      <ReactSelect
        {...field}
        {...props}
        inputId={id}
        isClearable
        defaultValue={colourOptions[0]}
        className="react-select"
        classNamePrefix="react-select"
        options={colourOptions}
      />
    ),
  },
};

export const WithMultiReactSelect: Story = {
  render: (args) => (
    <Form onSubmit={() => {}}>
      <FormField {...args} />
    </Form>
  ),
  args: {
    label: "Choose",
    name: "emailAddress",
    inputWrapper: ReactSelectContainer,
    options: {
      ...required,
    },
    asFieldSet: true,
    children: ({ field, props: { id, ...props } }) => (
      <ReactSelect
        {...field}
        {...props}
        isMulti
        inputId={id}
        defaultValue={colourOptions[0]}
        className="react-select"
        menuIsOpen
        classNamePrefix="react-select"
        options={colourOptions}
      />
    ),
  },
};
