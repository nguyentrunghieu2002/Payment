import type { Meta, StoryObj } from "@storybook/react";
import Customer from "./assets/Vector.svg";
import BuddyIcon from "./assets/Vector2.svg";

import CustomerSection from "./Components/organisms/CustomerSection";

const meta: Meta<typeof CustomerSection> = {
  title: "Organisms/CustomerAndBuddy",
  component: CustomerSection,
};

export default meta;
type Story = StoryObj<typeof CustomerSection>;

export const Default: Story = {
  name: "Customer",
  args: {
    title: {
      logoIcon: Customer,
      iconWidth: "14px",
      iconHeight: "16px",
      text: "Customer",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
  },
};

export const Buddy: Story = {
  name: "Buddy",
  args: {
    title: {
      logoIcon: BuddyIcon,
      iconWidth: "14px",
      iconHeight: "16px",
      text: "Buddy",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
  },
};
