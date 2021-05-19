import { Meta, Story } from "@storybook/react";
import React from "react";

import { TopOver, TopOverHeader, TopOverProps } from "../components/Top.over";

export default {
  title: "Example/TopOver",
  component: TopOver,
} as Meta;

const Template: Story<TopOverProps> = (args) => <TopOver {...args} />;

export const TopOverExample1 = Template.bind({});
TopOverExample1.args = {
  children: (
    <>
      <TopOverHeader title="TopOver Example #1" />
      <button>Content</button>
    </>
  ),
  onClose: () => {},
};

export const TopOverExample2 = Template.bind({});
TopOverExample2.args = {
  children: (
    <>
      <TopOverHeader title="TopOver Example #2" description="(with description)" />
      <button>Content</button>
    </>
  ),
  onClose: () => {},
};
