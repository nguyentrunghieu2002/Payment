import Info from "../../atoms/Info";
import { OrderData } from "../../Type/OrderType";

interface OrderSummary {
  data?: OrderData;
}

const OrderSummary = ({ data }: OrderSummary) => {
  console.log("order ne", data?.items[0]);
  const OrderData = data?.items[0] || undefined;

  return (
    <div
      style={{
        width: "366px",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
      }}
    >
      {OrderData ? (
        <>
          <Info
            text="Total Day"
            textValue={`${OrderData?.quantity} days`}
          ></Info>
          <Info
            text="Cost per Day"
            textValue={`${OrderData?.price} ${OrderData?.currency}`}
          ></Info>
          <Info text="Discount"></Info>
          <Info
            color="#FF611B"
            fontWeight="700"
            text="Total"
            textValue={`${OrderData?.total} ${OrderData?.currency}`}
          ></Info>
        </>
      ) : (
        <>
          <Info text="Total Day"></Info>
          <Info text="Cost per Day"></Info>
          <Info text="Discount"></Info>
          <Info color="#FF611B" fontWeight="700" text="Total"></Info>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
