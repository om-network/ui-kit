import { Meta, Story } from "@storybook/react";
import React from "react";

import { SlideOver, SlideOverFooter, SlideOverHeader, SlideOverProps } from "../components/Slide.over";

export default {
  title: "Example/SlideOver",
  component: SlideOver,
} as Meta;

const Template: Story<SlideOverProps> = (args) => <SlideOver {...args} />;

export const SlideOverExample1 = Template.bind({});
SlideOverExample1.args = {
  children: (
    <>
      <SlideOverHeader title="SlideOver Example #1" />
      <button>No Footer</button>
    </>
  ),
  onClose: () => {},
};

export const SlideOverExample2 = Template.bind({});
SlideOverExample2.args = {
  children: (
    <>
      <SlideOverHeader title="SlideOver Example #2" description="(with description)" />
      <button>With Header + Footer</button>
      <SlideOverFooter>Footer</SlideOverFooter>
    </>
  ),
  onClose: () => {},
};
