import type { Meta, StoryObj } from "@storybook/react";

import OrderSummarySection from "./Components/organisms/OrderSummarySection";

const meta: Meta<typeof OrderSummarySection> = {
  title: "Organisms/OrderSummarySection",
  component: OrderSummarySection,
};

export default meta;
type Story = StoryObj<typeof OrderSummarySection>;

export const Default: Story = {
  args: {
    orderHead: {
      text: "Order Summary",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
  },
};
