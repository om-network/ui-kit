import { Meta, Story } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";

import LabelDivider from "../../components/dividers/Label.divider";
import { ListItemsField, ListItemsFieldProps } from "../../components/fields/ListItems.field";

export default {
  title: "Example/Fields/ListItemsField",
  component: ListItemsField,
} as Meta;

const Template: Story<ListItemsFieldProps> = (args) => {
  const form = useForm();
  return <ListItemsField formRef={form} max={4} name="resources.2.items" subLabel="ListItems without children" />;
};
export const ListItemsFieldExample1 = Template.bind({});

const Template2: Story<ListItemsFieldProps> = (args) => {
  const form = useForm();
  return (
    <ListItemsField formRef={form} max={4} name="resources.1.items" subLabel="ListItems with children">
      <>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Section Name
          <div className="mt-1">
            <input type="text" className="input" />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Dolor culpa deserunt minim nulla labore occaecat id tempor tempor.
          </p>
        </label>
        <LabelDivider text="Links" />
      </>
    </ListItemsField>
  );
};
export const ListItemsFieldExample2 = Template2.bind({});
