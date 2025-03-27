import type { Meta, StoryObj } from "@storybook/react";
import Customer from "./assets/Vector.svg";
import BuddyIcon from "./assets/Vector2.svg";
import PaymentTemplate from "./Components/templates/PaymentTemplate";
import PaypalLogo from "./assets/Logo.png";
import PaymeLogo from "./assets/payme_logo1.png";

const meta: Meta<typeof PaymentTemplate> = {
  title: "Templates/PaymentTemplate",
  component: PaymentTemplate,
};

export default meta;
type Story = StoryObj<typeof PaymentTemplate>;

export const Default: Story = {
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
    title2: {
      logoIcon: BuddyIcon,
      iconWidth: "14px",
      iconHeight: "16px",
      text: "Customer",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
    bookingHead: {
      text: "Booking",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
    fromDate: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "From Date",
      textValue: "23 OCT 2024",
    },
    toDate: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "To Date",
      textValue: "24 OCT 2024",
    },
    duration: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Duration",
      textValue: "FULL DAY (8 HOURS/Day)",
    },
    location: {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Location",
      textValue: "HANOI, VIET NAM",
    },
    orderHead: {
      text: "Order Summary",
      size: "15px",
      weight: "700",
      lineHeight: "25px",
      color: "#273D52",
    },
    Paypal: {
      children: "",
      variant: "primary",
      img: PaypalLogo,
      color: "#FFC439",
      logoWidth: "59.9205513000488px",
      logoHeight: "14.631757736206055px",
    },
    Payme: {
      children: "",
      variant: "secondary",
      img: PaymeLogo,
      color: "#FF8F40",
      logoWidth: "67.09677124023438px",
      logoHeight: "16px",
    },
  },
};
