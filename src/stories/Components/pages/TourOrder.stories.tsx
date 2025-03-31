import type { Meta, StoryObj } from "@storybook/react";

import TourOrder from "./TourOrder";

const meta: Meta<typeof TourOrder> = {
  title: "Pages/TourOrder",
  component: TourOrder,
};

export default meta;
type Story = StoryObj<typeof TourOrder>;

export const Default: Story = {
  name: "TourOrder",
  args: {},
};
