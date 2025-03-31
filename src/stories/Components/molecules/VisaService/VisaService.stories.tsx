import type { Meta, StoryObj } from "@storybook/react";

import VisaService from "./VisaService";

const meta: Meta<typeof VisaService> = {
  title: "Molecules/VisaService",
  component: VisaService,
};

export default meta;
type Story = StoryObj<typeof VisaService>;

export const Default: Story = {
  name: "VisaService",
  args: {},
};
