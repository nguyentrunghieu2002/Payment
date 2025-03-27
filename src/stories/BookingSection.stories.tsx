import type { Meta, StoryObj } from "@storybook/react";

import BookingSection from "./Components/organisms/BookingSection";

const meta: Meta<typeof BookingSection> = {
  title: "organisms/BookingSection",
  component: BookingSection,
};

export default meta;
type Story = StoryObj<typeof BookingSection>;

export const Default: Story = {
  name: "Customer",
  args: {
    bookingHead: {
      text: "Booking",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
    fromDate: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "From Date",
      textValue: "23 OCT 2024",
    },
    toDate: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "To Date",
      textValue: "24 OCT 2024",
    },
    duration: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Duration",
      textValue: "FULL DAY (8 HOURS/Day)",
    },
    location: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Location",
      textValue: "HANOI, VIET NAM",
    },
  },
};
