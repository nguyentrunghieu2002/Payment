// import bgImg from "../../assets/home-cover-2 1.png";
// import Heading from "../atoms/Heading";
// import Icon from "../atoms/Icon";
// import tubuddLogo from "../../assets/Frame 405.svg";
// import PaymentOrganisms from "../organisms/PaymentOrganisms";

// const TourOrderTemplate = () => {
//   return (
//     <div style={{ border: "1px solid red", width: "430px", height: "884px" }}>
//       <img
//         src={bgImg}
//         style={{ backgroundColor: "#FF8F40", position: "fixed" }}
//       />
//       <div style={{ position: "absolute", top: "24px" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             paddingBottom: "19px",
//           }}
//         >
//           <Heading></Heading>
//           <Icon iconHeight="50px" iconWidth="50px" logoIcon={tubuddLogo}></Icon>
//         </div>
//         <PaymentOrganisms></PaymentOrganisms>
//       </div>
//     </div>
//   );
// };

// export default TourOrderTemplate;

import bgImg from "../../assets/home-cover-2 1.png";
import Heading from "../atoms/Heading/Heading";
import Icon from "../atoms/Icon/Icon";
import tubuddLogo from "../../assets/Frame 405.svg";
import VisaOrganisms from "../organisms/VisaOrganisms";

const VisaTemplate = () => {
  return (
    <div
      style={{
        width: "430px",
        height: "884px",
        position: "relative", // Để làm gốc cho các phần tử absolute bên trong
        overflow: "hidden", // Tránh tràn nội dung
        backgroundColor: "#F9F9F9",
        zIndex: 0, // Đưa hình nền ra sau
      }}
    >
      {/* Hình nền */}
      <img
        src={bgImg}
        style={{
          position: "absolute", // Đặt về absolute để không cố định khi cuộn
          backgroundColor: "#FF8F40",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Nội dung */}
      <div
        style={{
          position: "relative",
          top: "24px",
          padding: "0 16px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "19px",
          }}
        >
          <Heading />
          <Icon iconHeight="50px" iconWidth="50px" logoIcon={tubuddLogo} />
        </div>
        <VisaOrganisms></VisaOrganisms>
      </div>
    </div>
  );
};

export default VisaTemplate;
