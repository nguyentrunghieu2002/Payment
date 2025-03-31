import type { Meta, StoryObj } from "@storybook/react";

import OrderSummary from "./OrderSummary";

const meta: Meta<typeof OrderSummary> = {
  title: "Molecules/OrderSummary",
  component: OrderSummary,
};

export default meta;
type Story = StoryObj<typeof OrderSummary>;

export const Default: Story = {
  name: "OrderSummary",
  args: {},
};
