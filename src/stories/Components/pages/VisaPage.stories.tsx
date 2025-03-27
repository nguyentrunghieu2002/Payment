import type { Meta, StoryObj } from "@storybook/react";

import VisaPage from "./VisaPage";

const meta: Meta<typeof VisaPage> = {
  title: "Pages/VisaPage",
  component: VisaPage,
};

export default meta;
type Story = StoryObj<typeof VisaPage>;

export const Default: Story = {
  args: {},
};
