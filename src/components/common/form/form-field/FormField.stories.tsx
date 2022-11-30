import { ComponentStory, ComponentMeta } from "@storybook/react";

import { email, required } from "../rules";
import { Form } from "../form/Form";
import { Select } from "../select/Select";
import { TextArea } from "../textarea/TextArea";
import { SingleCheckbox } from "../single-checkbox/SingleCheckbox";
import { Radio } from "../collection/radio/Radio";
import { List } from "../collection/List";
import { Checkbox } from "../collection/checkbox/Checkbox";

import { Input } from "./../input/Input";
import { FormField } from "./FormField";

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

export default {
  title: "UI/Form/FormField",
  component: FormField,
  subcomponents: { Input },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = ({ ...args }) => (
  <Form onSubmit={() => {}} error={ExampleApiError}>
    <FormField {...args} />
  </Form>
);

export const WithInput = Template.bind({});
WithInput.args = {
  label: "Email Address",
  name: "emailAddress",
  options: {
    ...required,
    ...email,
  },
  description: "Description",
  children: <Input />,
};

export const WithSelect = Template.bind({});
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
