import Header from "../../atoms/Header/Header";
import Customer from "../../../assets/Vector.svg";
import Info from "../../atoms/Info";
import { OrderData } from "../../Type/OrderType";

interface CustomerMoleculesProps {
  data?: OrderData;
}

const CustomerMolecules = ({ data }: CustomerMoleculesProps) => {
  const headerData = {
    compName: "left-header",
    logoIcon: Customer,
    iconWidth: "14px",
    iconHeight: "16px",
    text: "Customer",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  };

  const customerInfo = data?.items[0].source;
  console.log(customerInfo);

  return (
    <div>
      <div
        style={{
          width: "366px",
          borderBottom: "1px solid #E0E0E0",
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          paddingBottom: "16px",
        }}
      >
        <Header {...headerData}></Header>
        <Info
          text="Name"
          textValue={customerInfo?.travellerUser?.fullName}
        ></Info>
        <Info text="Email"></Info>
        <Info text="Contact number"></Info>
      </div>
    </div>
  );
};

export default CustomerMolecules;
