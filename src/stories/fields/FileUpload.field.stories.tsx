import { Meta, Story } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";

import { FileUploadField, FileUploadFieldProps } from "../../components/fields/FileUpload.field";

export default {
  title: "Example/Fields/FileUploadField",
  component: FileUploadField,
} as Meta;

const Template: Story<FileUploadFieldProps> = (args) => {
  const form = useForm();
  return <FileUploadField formRef={form} name="logo" label="Logo" />;
};

export const FileUploadFieldExample1 = Template.bind({});
