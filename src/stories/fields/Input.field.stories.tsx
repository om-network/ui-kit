import { Meta, Story } from "@storybook/react";
import React from "react";

import { InputField, InputFieldProps } from "../../components/fields/Input.field";

export default {
  title: "Example/InputField",
  component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const InputFieldExample1 = Template.bind({});
InputFieldExample1.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "input1",
  label: "Input #1",
};

export const InputFieldExample2 = Template.bind({});
InputFieldExample2.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "input2",
  label: "Input #2",
  subLabel: "(with sublabel)",
};

export const InputFieldExample3 = Template.bind({});
InputFieldExample3.args = {
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
  label: "Input #3",
  subLabel: "(with error)",
};
