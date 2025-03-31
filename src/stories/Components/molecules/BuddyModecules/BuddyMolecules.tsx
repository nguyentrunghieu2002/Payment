import Header from "../../atoms/Header/Header";
import Buddy from "../../../assets/Vector2.svg";
import Info from "../../atoms/Info";
import { OrderData } from "../../Type/OrderType";

interface BuddyMoleculesProps {
  data?: OrderData;
}

const BuddyMolecules = ({ data }: BuddyMoleculesProps) => {
  const BuddyInfo = data?.items[0];
  console.log(BuddyInfo);

  const headerData = {
    compName: "left-header",
    logoIcon: Buddy,
    iconWidth: "14px",
    iconHeight: "16px",
    text: "Buddy",
    size: "15px",
    weight: "700",
    lineHeight: "25px",
    color: "#273D52",
  };

  return (
    <div
      style={{
        width: "366px",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
      }}
    >
      <Header {...headerData}></Header>
      <Info text="Name" textValue={BuddyInfo?.source?.buddy?.name}></Info>
      <Info text="Price" textValue={BuddyInfo?.price}></Info>
    </div>
  );
};

export default BuddyMolecules;
