import { DocumentAddIcon, GlobeIcon, UserIcon } from "@heroicons/react/outline";
import { Meta, Story } from "@storybook/react";
import React from "react";

import { ToolbarDivider, ToolbarDividerProps } from "../../components/dividers/Toolbar.divider";

export default {
  title: "Example/Dividers/ToolbarDivider",
  component: ToolbarDivider,
} as Meta;

const onTabclick = (index: string) => alert(`Tab #${index}`);

const Template: Story<ToolbarDividerProps> = (args) => (
  <ToolbarDivider {...args}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </ToolbarDivider>
);

export const ToolbarDividerExample1 = Template.bind({});
ToolbarDividerExample1.args = {
  menu: [
    {
      label: "First",
      icon: DocumentAddIcon,
    },
    {
      label: "Second",
      icon: GlobeIcon,
    },
    {
      label: "Third",
      icon: UserIcon,
    },
  ],
};
