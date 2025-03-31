import type { Meta, StoryObj } from "@storybook/react";

import VisaTemplate from "./VisaTemplate";

const meta: Meta<typeof VisaTemplate> = {
  title: "Templates/VisaTemplate",
  component: VisaTemplate,
};

export default meta;
type Story = StoryObj<typeof VisaTemplate>;

export const Default: Story = {
  args: {},
};
