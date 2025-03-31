import Header from "../../atoms/Header/Header";
import Customer from "../../../assets/Vector2.svg";
import Info from "../../atoms/Info/Info";

const VisaService = () => {
  const headerData = {
    compName: "left-header",
    logoIcon: Customer,
    iconWidth: "14px",
    iconHeight: "16px",
    text: "Visa Service Info",
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
          display: "flex",
          gap: "8px",
          flexDirection: "column",
        }}
      >
        <Header {...headerData}></Header>
        <Info text="Port of Entry"></Info>
        <Info text="Port of Exit"></Info>
        <Info text="Arrival Date"></Info>
        <Info text="Purpose of Entry"></Info>
        <Info text="Type of Visa"></Info>
        <Info text="Processing time"></Info>
      </div>
    </div>
  );
};

export default VisaService;
