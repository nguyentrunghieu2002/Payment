import type { Meta, StoryObj } from "@storybook/react";

import VisaOrder from "./VisaOrder";

const meta: Meta<typeof VisaOrder> = {
  title: "Molecules/VisaOrder",
  component: VisaOrder,
};

export default meta;
type Story = StoryObj<typeof VisaOrder>;

export const Default: Story = {
  name: "VisaOrder",
  args: {},
};
