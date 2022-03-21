import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FeaturesGrid } from "./FeaturesGrid";

export default {
  title: "FeaturesGrid",
  component: FeaturesGrid,
} as ComponentMeta<typeof FeaturesGrid>;

const Template: ComponentStory<typeof FeaturesGrid> = (args: any) => (
  <FeaturesGrid {...args} />
);

export const OneFeature = Template.bind({});
OneFeature.args = {
  gap: 10,
  templateColumns: 3,
  items: [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3858/3858639.png",
      title: "Easy to use",
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  gap: 10,
  templateColumns: 3,
  items: [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3858/3858639.png",
      title: "Easy to use",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5fc4b5e5cd1e280355ec9c9a/1606842285655-5N1ZJ68D6FLF394IZRKI/privacy-icon.png",
      title: "Privacy",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cloud_computing_icon.svg/2560px-Cloud_computing_icon.svg.png",
      title: "Cloud Based",
    },
    {
      image: "https://static.thenounproject.com/png/1854507-200.png",
      title: "Spending Analysis",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png",
      title: "Amazon Pay",
    },
    {
      image:
        "https://i0.wp.com/easytrak.co/wp-content/uploads/2021/06/live-tracking.png?fit=512%2C512\u0026ssl=1",
      title: "GPS Tracking",
    },
  ],
};
