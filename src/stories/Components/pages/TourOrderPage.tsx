import Header from "../molecules/Header";
import CustomerIcon from "../../assets/Vector.svg";
import BuddyIcon from "../../assets/Vector2.svg";
import PaypalLogo from "../../assets/Logo.png";
import PaymeLogo from "../../assets/payme_logo1.png";
import backgroundImg from "../../assets/home-cover-2 1.png";

import PaymentTemplate, {
  PaymentTemplateProps,
} from "../templates/PaymentTemplate";

// Fake data cho từng phần
const customerData = [
  { text: "Name", textValue: "Quang Son Nguyen" },
  { text: "Email", textValue: "nguyenquangson2k1@gmail.com" },
  { text: "Contact number", textValue: "+84345169775" },
];

const buddyData = [
  { text: "Name", textValue: "ViceStone" },
  { text: "Price", textValue: "$25/h" },
];

const orderSummaryData = [
  { text: "Total Day", textValue: "2 days" },
  { text: "Cost per Day", textValue: "40.00 USD" },
  { text: "Discount", textValue: "10.40 USD" },
  { text: "Total", textValue: "80.00 USD", color: "#FF611B" },
];

// Fake data cho PaymentTemplate
const fakePaymentData: PaymentTemplateProps = {
  title: {
    logoIcon: CustomerIcon,
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
    text: "Buddy",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
  bookingHead: {
    text: "Booking Details",
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
    textValue: "10 May 2025",
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
    textValue: "12 May 2025",
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
    textValue: "3 Days",
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
    textValue: "Da Nang, Vietnam",
  },
  orderHead: {
    text: "Order Summary",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  },
  Paypal: {
    children: "Pay with PayPal",
    variant: "primary",
    img: PaypalLogo,
    color: "#FFC439",
    logoWidth: "59px",
    logoHeight: "15px",
  },
  Payme: {
    children: "Pay with PayMe",
    variant: "secondary",
    img: PaymeLogo,
    color: "#FF8F40",
    logoWidth: "67px",
    logoHeight: "16px",
  },
  customerData,
  buddyData,
  orderSummaryData,
};

const TourOrderPage = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        height: "884px",
        position: "relative",
        width: "fit-content",
        backgroundColor: "#F9F9F9",
      }}
    >
      <div
        style={{
          padding: "24px 16px 19px 17px",
          backgroundImage: `url(${backgroundImg})`, // 🔥 Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200px", // Điều chỉnh chiều cao phù hợp

          backgroundColor: "#FF8F40",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          padding: "0px 16px 22px 16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "100px",
          }}
        >
          <PaymentTemplate {...fakePaymentData} />
        </div>
      </div>
    </div>
  );
};

export default TourOrderPage;
