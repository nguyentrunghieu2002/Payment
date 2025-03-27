// import Button from "../atoms/Button";
// import BookingSection from "../organisms/BookingSection";
// import CustomerSection from "../organisms/CustomerSection";
// import OrderSummarySection from "../organisms/OrderSummarySection";

// interface BookingContentProps {
//   size: string;
//   weight: string;
//   lineHeight: string;
//   heightDiv: string;
//   widthDiv: string;
//   textHeader: string;
//   textValue: string;
//   parentHeight: string;
//   parentWidth: string;
// }

// interface TitleProps {
//   logoIcon: string;
//   iconWidth: string;
//   iconHeight: string;
//   text: string;
//   size: string;
//   weight: string;
//   lineHeight: string;
//   color: string;
// }

// interface BookingHeadProps {
//   text: string;
//   size: string;
//   weight: string;
//   lineHeight: string;
//   color: string;
// }

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   variant?: "primary" | "secondary";
//   img: string;
//   color: string;
//   logoWidth: string;
//   logoHeight: string;
// }

// interface PaymentTemplateProps {
//   title: TitleProps;
//   title2: TitleProps;
//   bookingHead: BookingHeadProps;
//   fromDate: BookingContentProps;
//   toDate: BookingContentProps;
//   duration: BookingContentProps;
//   location: BookingContentProps;
//   orderHead: BookingHeadProps;
//   Paypal: ButtonProps;
//   Payme: ButtonProps;
// }

// const fakeData = [
//   { text: "Name", textValue: "Quang Son Nguyen" },
//   { text: "Email", textValue: "nguyenquangson2k1@gmail.com" },
//   { text: "Contact number", textValue: "+84345169775" },
// ];

// const fakeData2 = [
//   { text: "Name", textValue: "ViceStone" },
//   { text: "Price", textValue: "$25/h" },
// ];

// const fakeData3 = [
//   { text: "Total Day", textValue: "2 days" },
//   { text: "Cost per Day", textValue: "40.00 USD" },
//   { text: "Discount", textValue: "10.40 USD" },
//   { text: "Total", textValue: "80.00 USD", color: "#FF611B" },
// ];

// const PaymentTemplate = ({
//   title,
//   title2,
//   bookingHead,
//   fromDate,
//   duration,
//   location,
//   toDate,
//   orderHead,
//   Paypal,
//   Payme,
// }: PaymentTemplateProps) => {
//   return (
//     <div style={{}}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//           padding: "16px",
//           border: "1px solid blue",
//           borderRadius: "16px",
//           width: "366px",
//         }}
//       >
//         <CustomerSection
//           paddingBottom="16px"
//           title={title}
//           infoData={fakeData}
//         ></CustomerSection>
//         <CustomerSection title={title2} infoData={fakeData2}></CustomerSection>
//         <BookingSection
//           bookingHead={bookingHead}
//           duration={duration}
//           fromDate={fromDate}
//           location={location}
//           toDate={toDate}
//         ></BookingSection>
//         <OrderSummarySection
//           orderData={fakeData3}
//           orderHead={orderHead}
//         ></OrderSummarySection>
//         <Button {...Payme}></Button>
//         <Button {...Paypal}></Button>
//       </div>
//     </div>
//   );
// };

// export default PaymentTemplate;

import React from "react";
import Button from "../atoms/Button";
import CustomerSection from "../organisms/CustomerSection";
import OrderSummarySection from "../organisms/OrderSummarySection";
import Text from "../atoms/Text";

interface BookingContentProps {
  size: string;
  weight: string;
  lineHeight: string;
  heightDiv: string;
  widthDiv: string;
  textHeader: string;
  textValue: string;
  parentHeight: string;
  parentWidth: string;
}

interface TitleProps {
  logoIcon: string;
  iconWidth: string;
  iconHeight: string;
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

interface BookingHeadProps {
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  img: string;
  color: string;
  logoWidth: string;
  logoHeight: string;
}

export interface PaymentTemplateProps {
  title: TitleProps;
  title2: TitleProps;
  bookingHead: BookingHeadProps;
  fromDate: BookingContentProps;
  toDate: BookingContentProps;
  duration: BookingContentProps;
  location: BookingContentProps;
  orderHead: BookingHeadProps;
  Paypal: ButtonProps;
  Payme: ButtonProps;
  customerData: { text: string; textValue: string }[]; // 🆕 Dữ liệu khách hàng
  buddyData: { text: string; textValue: string }[]; // 🆕 Dữ liệu người hướng dẫn
  orderSummaryData: { text: string; textValue: string; color?: string }[]; // 🆕 Dữ liệu đơn hàng
}

const VisaTemplate = ({
  title,
  title2,

  orderHead,
  Paypal,
  Payme,
  customerData,
  buddyData,
  orderSummaryData,
}: PaymentTemplateProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          //   border: "1px solid blue",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          width: "366px",
        }}
      >
        <CustomerSection
          borderBottom="1px solid #E0E0E0"
          title={title}
          infoData={customerData}
          height="145px"
        />
        <CustomerSection title={title2} infoData={buddyData} />

        <OrderSummarySection
          orderData={orderSummaryData}
          orderHead={orderHead}
        />
        <Button {...Payme} />
        <Button {...Paypal} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Text
            color="#B4B6BC"
            lineHeight="18px"
            size="12px"
            text="The government fee is included in this service."
            weight="400"
          ></Text>
        </div>
      </div>
    </div>
  );
};

export default VisaTemplate;
