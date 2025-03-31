import type { Meta, StoryObj } from "@storybook/react";

import PaymentOrganisms from "./PaymentOrganisms";

const meta: Meta<typeof PaymentOrganisms> = {
  title: "Organisms/PaymentOrganisms",
  component: PaymentOrganisms,
};

export default meta;
type Story = StoryObj<typeof PaymentOrganisms>;

export const Default: Story = {
  name: "Payment Organisms ",
  args: {},
};
