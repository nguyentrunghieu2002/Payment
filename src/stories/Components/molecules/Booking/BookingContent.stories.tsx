import type { Meta, StoryObj } from "@storybook/react";

import BookingContent from "./BookingContent";

const meta: Meta<typeof BookingContent> = {
  title: "Molecules/BookingContent",
  component: BookingContent,
};

export default meta;
type Story = StoryObj<typeof BookingContent>;

export const FromDate: Story = {
  name: "Booking Content Half",
  args: {
    size: "12px",
    weight: "400",
    lineHeight: "18px",
    parentHeight: "44px",
    parentWidth: "146px",
    heightDiv: "60px",
    widthDiv: "178.5px",
    textHeader: "From Data",
    textValue: "23 OCT 2024",
  },
};

// export const ToDate: Story = {
//   name: "To Date",
//   args: {
//     ...FromDate.args,
//     textHeader: "To Date",
//     textValue: "24 OCT 2024",
//   },
// };

export const Duration: Story = {
  name: "Booking Content Full",
  args: {
    ...FromDate.args,
    parentHeight: "44px",
    parentWidth: "334px",
    heightDiv: "60px",
    widthDiv: "366px",
    textHeader: "Duration",
    textValue: "FULL DAY (8 HOURS/Day)",
  },
};

// export const Location: Story = {
//   name: "Location",
//   args: {
//     ...Duration.args,
//     parentHeight: "44px",
//     parentWidth: "334px",
//     heightDiv: "60px",
//     widthDiv: "366px",
//     textHeader: "Location",
//     textValue: "HANOI, VIET NAM",
//   },
// };
