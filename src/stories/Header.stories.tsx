import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Components/molecules/Header";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
