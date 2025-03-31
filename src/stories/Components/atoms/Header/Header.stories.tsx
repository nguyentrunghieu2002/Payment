import type { Meta, StoryObj } from "@storybook/react";
import Customer from "../../../assets/Vector.svg";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Atoms/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  name: "Left Header",
  args: {
    compName: "left-header",
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

export const MiddleHeader: Story = {
  name: "Middle Header",
  args: {
    compName: "middle-header",
    text: "Booking",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
};

// export const Buddy: Story = {
//   name: "Buddy",
//   args: {
//     ...Default.args,
//     text: "Buddy",
//     logoIcon: BuddyIcon,
//   },
// };
