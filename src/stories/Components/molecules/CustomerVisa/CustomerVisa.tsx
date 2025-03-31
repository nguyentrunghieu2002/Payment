import Header from "../../atoms/Header/Header";
import Customer from "../../../assets/Vector.svg";
import Info from "../../atoms/Info";

const CustomerVisa = () => {
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
        <Info text="Name"></Info>
        <Info text="Email"></Info>
        <Info text="Contact number"></Info>
        <Info text="Nationality"></Info>
      </div>
    </div>
  );
};

export default CustomerVisa;
