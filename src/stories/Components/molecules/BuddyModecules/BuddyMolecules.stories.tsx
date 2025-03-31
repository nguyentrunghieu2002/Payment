import type { Meta, StoryObj } from "@storybook/react";

import BuddyMolecules from "./BuddyMolecules";

const meta: Meta<typeof BuddyMolecules> = {
  title: "Molecules/BuddyMolecules",
  component: BuddyMolecules,
};

export default meta;
type Story = StoryObj<typeof BuddyMolecules>;

export const Default: Story = {
  name: "BuddyMolecules",
  args: {},
};
