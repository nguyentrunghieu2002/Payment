import { Meta, StoryFn } from "@storybook/react";
import Button from "./Components/atoms/Button";
import PaypalLogo from "./assets/Logo.png";
import PaymeLogo from "./assets/payme_logo1.png";

export default {
  title: "Atoms/Button",

  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["Paypal", "PayMe"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Paypal = Template.bind({});
Paypal.args = {
  children: "",
  variant: "primary",
  img: PaypalLogo,
  color: "#FFC439",
  logoWidth: "59.9205513000488px",
  logoHeight: "14.631757736206055px",
};

export const PayMe = Template.bind({});
PayMe.args = {
  children: "",
  variant: "secondary",
  img: PaymeLogo,
  color: "#FF8F40",
  logoWidth: "67.09677124023438px",
  logoHeight: "16px",
};
