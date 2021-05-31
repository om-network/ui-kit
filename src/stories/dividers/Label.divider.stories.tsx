import { Meta, Story } from "@storybook/react";
import React from "react";

import { LabelDivider, LabelDividerProps } from "../../components/dividers/Label.divider";

export default {
  title: "Example/Dividers/LabelDivider",
  component: LabelDivider,
} as Meta;

const Template: Story<LabelDividerProps> = (args) => <LabelDivider {...args} />;

export const LabelDividerExample1 = Template.bind({});
LabelDividerExample1.args = {
  text: "Divider #1",
};

export const LabelDividerExample2 = Template.bind({});
LabelDividerExample2.args = {
  text: "Divider #2",
};
