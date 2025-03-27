import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Components/atoms/Heading";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {},
};
