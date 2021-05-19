import { Meta, Story } from "@storybook/react";
import React from "react";

import { RadioGroupField, RadioGroupFieldProps } from "../../components/fields/RadioGroup.field";

export default {
  title: "Example/RadioGroupField",
  component: RadioGroupField,
} as Meta;

const Template: Story<RadioGroupFieldProps> = (args) => <RadioGroupField {...args} />;

export const RadioGroupFieldExample1 = Template.bind({});
RadioGroupFieldExample1.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "radio1",
  label: "RadioGroup #1",
  heading: "Test heading",
  options: [
    {
      itemname: "opt1",
      title: "Option 1",
    },
    {
      itemname: "opt2",
      title: "Option 2",
    },
    {
      itemname: "opt3",
      title: "Option 3",
    },
  ],
};

export const RadioGroupFieldExample2 = Template.bind({});
RadioGroupFieldExample2.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "radio1",
  label: "RadioGroup #1",
  heading: "Test heading",
  subheading: "(with subheading)",
  options: [
    {
      itemname: "opt1",
      title: "Option 1",
      description: "The first option",
    },
    {
      itemname: "opt2",
      title: "Option 2",
      description: "The second option",
    },
    {
      itemname: "opt3",
      title: "Option 3",
      description: "The third option",
    },
  ],
};

export const RadioGroupFieldExample3 = Template.bind({});
RadioGroupFieldExample3.args = {
  formRef: {
    formState: {
      errors: {
        input3: {
          message: "Sample error",
        },
      },
    },
    register: () => {},
  },
  name: "input3",
  heading: "Test Heading",
  subheading: "(with error)",
  options: [
    {
      itemname: "opt1",
      title: "Option 1",
      description: "The first option",
    },
    {
      itemname: "opt2",
      title: "Option 2",
      description: "The second option (disabled)",
      disabled: true,
    },
    {
      itemname: "opt3",
      title: "Option 3",
      description: "The third option",
    },
  ],
};
