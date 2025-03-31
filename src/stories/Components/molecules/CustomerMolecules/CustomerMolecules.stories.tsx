import type { Meta, StoryObj } from "@storybook/react";

import CustomerMolecules from "./CustomerMolecules";

const meta: Meta<typeof CustomerMolecules> = {
  title: "Molecules/CustomerMolecules",
  component: CustomerMolecules,
};

export default meta;
type Story = StoryObj<typeof CustomerMolecules>;

export const Default: Story = {
  name: "CustomerMolecules",
  args: {},
};
