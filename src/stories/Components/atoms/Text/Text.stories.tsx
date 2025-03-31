import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Customer: Story = {
  name: "Customer",
  args: {
    text: "Customer",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
};

export const Buddy: Story = {
  name: "Buddy",
  args: {
    ...Customer.args,
    text: "Buddy",
  },
};

export const Booking: Story = {
  name: "Booking text",
  args: {
    text: "From Data",
    size: "12px",
    weight: "400",
    lineHeight: "18px",
    color: "#B4B6BC",
  },
};

export const BookingValue: Story = {
  name: "Booking value",
  args: {
    text: "23 OCT 2024",
    size: "12px",
    weight: "400",
    lineHeight: "18px",
    color: "#273D52",
  },
};
