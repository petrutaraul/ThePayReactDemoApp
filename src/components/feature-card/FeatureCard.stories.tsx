import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeatureCard } from "./Feature-card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FeatureCard",
  component: FeatureCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    rowReverse: { rowReverse: "reverse" },
    transparentBackground: { transparentBackground: "transparentBackground" },
    fontSize: { size: "fontSize" },
  },
} as ComponentMeta<typeof FeatureCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeatureCard> = (args: any) => (
  <FeatureCard {...args} />
);

export const Reversed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Reversed.args = {
  rowReverse: true,
  title: "Easy to use",
  image: "https://cdn-icons-png.flaticon.com/512/3858/3858639.png",
  transparentBackground: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparentBackground: true,
  title: "Easy to use",
  image: "https://cdn-icons-png.flaticon.com/512/3858/3858639.png",
};
