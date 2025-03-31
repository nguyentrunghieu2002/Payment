import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import tubuddLogo from "../../../assets/Frame 405.svg";
import Customer from "../../../assets/Vector.svg";
import Buddy from "../../../assets/Vector2.svg";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "Tubudd Logo",
  args: {
    logoIcon: tubuddLogo,
    iconWidth: "50px",
    iconHeight: "50px",
  },
};

export const CustomerIcon: Story = {
  name: "Customer Icon",
  args: {
    logoIcon: Customer,
    iconWidth: "14px",
    iconHeight: "16px",
  },
};

export const BuddyIcon: Story = {
  name: "Buddy Icon",
  args: {
    logoIcon: Buddy,
    iconWidth: "14px",
    iconHeight: "16px",
  },
};
