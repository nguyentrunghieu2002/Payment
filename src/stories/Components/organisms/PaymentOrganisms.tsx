import Button from "../atoms/Button";
import Header from "../atoms/Header/Header";
import BookingContent from "../molecules/Booking/BookingContent";
import BuddyMolecules from "../molecules/BuddyModecules/BuddyMolecules";
import CustomerMolecules from "../molecules/CustomerMolecules/CustomerMolecules";
import OrderSummary from "../molecules/OrderSummary/OrderSummary";
import PaypalLogo from "../../assets/Logo.png";
import PaymeLogo from "../../assets/payme_logo1.png";
import { OrderData } from "../Type/OrderType"; // ✅ Import type

interface PaymentOrganismsProps {
  data?: OrderData;
}

const PaymentOrganisms = ({ data }: PaymentOrganismsProps) => {
  console.log("organisms", data);
  // const sourceValue = data.items[0].source;
  const sourceValue = data?.items[0].source || undefined;
  console.log(555, sourceValue);
  const ButtonData1 = {
    children: "",
    variant: "secondary",
    img: PaymeLogo,
    color: "#FF8F40",
    logoWidth: "67.09677124023438px",
    logoHeight: "16px",
  };

  const ButtonData2 = {
    children: "",
    variant: "primary",
    img: PaypalLogo,
    color: "#FFC439",
    logoWidth: "59.9205513000488px",
    logoHeight: "14.631757736206055px",
  };

  const headerData = {
    compName: "middle-header",
    text: "Booking",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  };

  const headerData2 = {
    compName: "middle-header",
    text: "Order Summary",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  };

  const BookingData = [
    {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "From Date",
      textValue: sourceValue?.fromDate,
    },
    {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "146px",
      heightDiv: "60px",
      widthDiv: "178.5px",
      textHeader: "To Date",
      textValue: sourceValue?.toDate,
    },
  ];

  const LongBookingContent = [
    {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Duration",
      textValue: sourceValue?.sessionDuration,
    },
    {
      size: "12px",
      weight: "400",
      lineHeight: "18px",
      parentHeight: "44px",
      parentWidth: "334px",
      heightDiv: "60px",
      widthDiv: "366px",
      textHeader: "Location",
      textValue: sourceValue?.location.name,
    },
  ];

  return (
    <div
      style={{
        width: "398px",
        height: "762px",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          margin: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {data ? <CustomerMolecules data={data} /> : <CustomerMolecules />}
        {data ? <BuddyMolecules data={data} /> : <BuddyMolecules />}
        <Header {...headerData}></Header>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "366px",
            }}
          >
            {BookingData.map((item) => (
              <BookingContent {...item}></BookingContent>
            ))}
          </div>
          {LongBookingContent.map((item) => (
            <BookingContent {...item}></BookingContent>
          ))}
        </div>
        <Header {...headerData2}></Header>
        {data ? <OrderSummary data={data} /> : <OrderSummary />}
        <Button {...ButtonData1}></Button>
        <Button {...ButtonData2}></Button>
      </div>
    </div>
  );
};

export default PaymentOrganisms;
