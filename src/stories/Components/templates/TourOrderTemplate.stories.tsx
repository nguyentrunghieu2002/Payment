import type { Meta, StoryObj } from "@storybook/react";

import TourOrderTemplate from "./TourOrderTemplate";

const meta: Meta<typeof TourOrderTemplate> = {
  title: "Templates/TourOrderTemplate",
  component: TourOrderTemplate,
};

export default meta;
type Story = StoryObj<typeof TourOrderTemplate>;

export const Default: Story = {
  args: {},
};
