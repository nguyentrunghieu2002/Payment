import type { Meta, StoryObj } from "@storybook/react";

import CustomerVisa from "./CustomerVisa";

const meta: Meta<typeof CustomerVisa> = {
  title: "Molecules/CustomerVisa",
  component: CustomerVisa,
};

export default meta;
type Story = StoryObj<typeof CustomerVisa>;

export const Default: Story = {
  name: "CustomerVisa",
  args: {},
};
