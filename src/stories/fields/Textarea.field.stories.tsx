import { Meta, Story } from "@storybook/react";
import React from "react";

import { TextareaField, TextareaFieldProps } from "../../components/fields/Textarea.field";

export default {
  title: "Example/Fields/TextareaField",
  component: TextareaField,
} as Meta;

const Template: Story<TextareaFieldProps> = (args) => <TextareaField {...args} />;

export const TextareaFieldExample1 = Template.bind({});
TextareaFieldExample1.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "textarea1",
  label: "Textarea #1",
};

export const TextareaFieldExample2 = Template.bind({});
TextareaFieldExample2.args = {
  formRef: {
    formState: {
      errors: {},
    },
    register: () => {},
  },
  name: "textarea2",
  label: "Textarea #2",
  subLabel: "(with sublabel)",
};

export const TextareaFieldExample3 = Template.bind({});
TextareaFieldExample3.args = {
  formRef: {
    formState: {
      errors: {
        textarea3: {
          message: "Sample error",
        },
      },
    },
    register: () => {},
  },
  name: "textarea3",
  label: "Textarea #3",
  subLabel: "(with error)",
};
