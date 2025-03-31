import type { Meta, StoryObj } from "@storybook/react";

import VisaOrganisms from "./VisaOrganisms";

const meta: Meta<typeof VisaOrganisms> = {
  title: "Organisms/VisaOrganisms",
  component: VisaOrganisms,
};

export default meta;
type Story = StoryObj<typeof VisaOrganisms>;

export const Default: Story = {
  name: "VisaOrganisms",
  args: {},
};
