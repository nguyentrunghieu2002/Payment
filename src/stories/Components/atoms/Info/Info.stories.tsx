import type { Meta, StoryObj } from "@storybook/react";

import Info from "./Info";

const meta: Meta<typeof Info> = {
  title: "Atoms/Info",
  component: Info,
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = {
  name: "Name",
  args: {
    text: "Name",
    textValue: "Quang Son Nguyen",
  },
};
