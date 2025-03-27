import type { Meta, StoryObj } from "@storybook/react";

import TourOrderPage from "./TourOrderPage";

const meta: Meta<typeof TourOrderPage> = {
  title: "Pages/TourOrderPage",
  component: TourOrderPage,
};

export default meta;
type Story = StoryObj<typeof TourOrderPage>;

export const Default: Story = {
  args: {},
};
