import type { Meta, StoryObj } from "@storybook/react";

import BookingAndOrder from "./Components/molecules/BookingAndOrderTitle";

const meta: Meta<typeof BookingAndOrder> = {
  title: "Molecules/BookingAndOrder",
  component: BookingAndOrder,
};

export default meta;
type Story = StoryObj<typeof BookingAndOrder>;

export const Booking: Story = {
  args: {
    text: "Booking",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
};

export const OrderSummary: Story = {
  args: {
    text: "Order Summary",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
};
