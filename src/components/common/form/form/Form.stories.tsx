import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReactSelect from "react-select";

import { email, password, passwordRepeat, required } from "../rules";
import Form from "../form/Form";
import SingleCheckbox from "../single-checkbox/SingleCheckbox";
import List from "../collection/List";
import Checkbox from "../collection/checkbox/Checkbox";
import { StyledReactSelect } from "../react-select/ReactSelect.styles";
import Heading from "../../heading/Heading";
import Button from "../../button/Button";

import Input from "./../input/Input";
import FormField from "./../form-field/FormField";

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

export default {
  title: "UI/Form/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ ...args }) => (
  <Form {...args} onSubmit={() => {}}>
    <Heading>Register here</Heading>
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "1.25rem",
      }}
    >
      <FormField
        style={{
          flexGrow: 1,
        }}
        label="First name"
        name="firstName"
        options={{
          ...required,
        }}
      >
        <Input />
      </FormField>
      <FormField
        style={{
          flexGrow: 1,
        }}
        label="Last name"
        name="lastName"
        options={{
          ...required,
        }}
      >
        <Input />
      </FormField>
    </div>
    <FormField
      label="Email address"
      name="emailAddress"
      options={{
        ...required,
        ...email,
      }}
    >
      <Input type="email" />
    </FormField>
    <FormField
      label="Favorite color"
      name="color"
      inputWrapper={StyledReactSelect}
      options={{
        ...required,
      }}
    >
      {({ field, props: { id, ...props } }) => (
        <ReactSelect
          {...field}
          {...props}
          inputId={id}
          defaultValue={colourOptions[0]}
          className="react-select"
          classNamePrefix="react-select"
          options={colourOptions}
        />
      )}
    </FormField>
    <FormField
      label="Hobbies"
      name="hobbies"
      inputWrapper={List}
      options={{
        ...required,
      }}
    >
      <Checkbox key="1" inputValue="value1">
        Value 1
      </Checkbox>
      <Checkbox key="2" inputValue="value2">
        Value 2
      </Checkbox>
      <Checkbox key="3" inputValue="value3">
        Value 3
      </Checkbox>
    </FormField>

    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "1.25rem",
      }}
    >
      <FormField
        style={{
          flexGrow: 1,
        }}
        label="Password"
        name="password"
        description="At least 9 chars, lowercase, uppercase, special char and number"
        options={{
          ...password,
        }}
      >
        <Input type="password" />
      </FormField>
      <FormField
        style={{
          flexGrow: 1,
        }}
        label="Repeat password"
        name="passwordRepeat"
        watchValidate={passwordRepeat("password")}
      >
        <Input type="password" />
      </FormField>
    </div>
    <FormField
      label="I accept privacy policy"
      name="privacy"
      $isToggle
      options={{
        ...required,
      }}
    >
      <SingleCheckbox />
    </FormField>
    <Button>Submit</Button>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  error: ExampleApiError,
};

/*export const WithSelect = Template.bind({});
WithSelect.args = {
  label: "Role",
  name: "emailAddress",
  options: {
    ...required,
  },
  description: "Description",
  children: (
    <Select addEmptyOption>
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
    </Select>
  ),
};

export const WithTextarea = Template.bind({});
WithTextarea.args = {
  label: "Textarea",
  name: "emailAddress",
  options: {
    ...required,
  },
  description: "Description",
  children: <TextArea />,
};

export const WithSingleCheckbox = Template.bind({});
WithSingleCheckbox.args = {
  label: "I accept privacy policy",
  name: "emailAddress",
  $isToggle: true,
  options: {
    ...required,
  },
  children: <SingleCheckbox />,
};

export const WithRadioList = Template.bind({});
WithRadioList.args = {
  label: "Choose one",
  name: "emailAddress",
  options: {
    ...required,
  },
  inputWrapper: List,
  asFieldSet: true,
  children: [
    <Radio key="1" inputValue="value1">
      Value 1
    </Radio>,
    <Radio key="2" inputValue="value2">
      Value 2
    </Radio>,
    <Radio key="3" inputValue="value3">
      Value 3
    </Radio>,
  ],
};

export const WithCheckboxList = Template.bind({});
WithCheckboxList.args = {
  label: "Choose multiple",
  name: "emailAddress",
  options: {
    ...required,
  },
  asFieldSet: true,
  inputWrapper: List,
  children: [
    <Checkbox key="1" inputValue="value1">
      Value 1
    </Checkbox>,
    <Checkbox key="2" inputValue="value2">
      Value 2
    </Checkbox>,
    <Checkbox key="3" inputValue="value3">
      Value 3
    </Checkbox>,
  ],
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

export const WithReactSelect = Template.bind({});
WithReactSelect.args = {
  label: "Choose multiple",
  name: "emailAddress",
  inputWrapper: StyledReactSelect,
  options: {
    ...required,
  },
  asFieldSet: true,
  children: ({ field }) => (
    <ReactSelect
      {...field}
      defaultValue={colourOptions[0]}
      className="react-select"
      classNamePrefix="react-select"
      options={colourOptions}
    />
  ),
};
*/
