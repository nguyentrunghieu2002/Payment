import Button from "../atoms/Button/Button";
import Header from "../atoms/Header/Header";
import CustomerVisa from "../molecules/CustomerVisa/CustomerVisa";
import VisaOrder from "../molecules/VisaOrder/VisaOrder";
import VisaService from "../molecules/VisaService/VisaService";
import PaypalLogo from "../../assets/Logo.png";
import PaymeLogo from "../../assets/payme_logo1.png";

const VisaOrganisms = () => {
  const headerData2 = {
    compName: "middle-header",
    text: "Order Summary",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  };

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

  return (
    <div
      style={{
        width: "fit-content",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          width: "366px",
          margin: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <CustomerVisa></CustomerVisa>
        <VisaService></VisaService>
        <Header {...headerData2}></Header>
        <VisaOrder></VisaOrder>
        <Button {...ButtonData1}></Button>
        <Button {...ButtonData2}></Button>
        <div
          style={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: "#B4B6BC",
            display: "flex",
            justifyContent: "center",
          }}
        >
          The government fee is included in this service.
        </div>
      </div>
    </div>
  );
};

export default VisaOrganisms;
