import Info from "../atoms/Info";
import BookingAndOrderTitle from "../molecules/BookingAndOrderTitle";

interface OrderHeadProps {
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

interface OrderDataProps {
  text: string;
  textValue: string;
  color?: string;
}

interface OrderSummmaryProps {
  orderHead: OrderHeadProps;
  orderData: OrderDataProps[];
}

const OrderSummarySection = ({ orderData, orderHead }: OrderSummmaryProps) => {
  return (
    <>
      <div>
        <BookingAndOrderTitle {...orderHead}></BookingAndOrderTitle>
      </div>
      <div
        style={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {orderData?.map((item, index) => (
          <Info
            key={index}
            text={item.text}
            textValue={item.textValue}
            color={item.color}
          ></Info>
        ))}
      </div>
    </>
  );
};

export default OrderSummarySection;
