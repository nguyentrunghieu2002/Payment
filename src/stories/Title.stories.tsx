import type { Meta, StoryObj } from "@storybook/react";
import Customer from "./assets/Vector.svg";
import BuddyIcon from "./assets/Vector2.svg";

import Title from "./Components/molecules/Title";

const meta: Meta<typeof Title> = {
  title: "Molecules/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  name: "Customer",
  args: {
    logoIcon: Customer,
    iconWidth: "14px",
    iconHeight: "16px",
    text: "Customer",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
};

export const Buddy: Story = {
  name: "Buddy",
  args: {
    ...Default.args,
    text: "Buddy",
    logoIcon: BuddyIcon,
  },
};
