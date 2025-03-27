import Info from "../atoms/Info";
import Title from "../molecules/Title";

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

interface InfoProps {
  text: string;
  textValue: string;
}

interface CustomerSectionProps {
  paddingBottom?: string;
  borderBottom?: string;
  height?: string;
  title: TitleProps;
  infoData: InfoProps[];
}

// const fakeData = [
//   { text: "Name", textValue: "Quang Son Nguyen" },
//   { text: "Email", textValue: "nguyenquangson2k1@gmail.com" },
//   { text: "Contact number", textValue: "+84345169775" },
// ];

// const fakeData = [
//   { text: "Name", textValue: "ViceStone" },
//   { text: "Price", textValue: "$25/h" },
// ];

const CustomerSection = ({
  infoData,
  title,
  paddingBottom,
  borderBottom,
  height,
}: CustomerSectionProps) => {
  return (
    <div
      style={{
        width: "fit-content",
        height: height,
        paddingBottom: paddingBottom,
        borderBottom: borderBottom,
      }}
    >
      {/* <div style={{ paddingBottom: "16px" }}> */}
      <div style={{ paddingBottom: "8px" }}>
        <Title {...title}></Title>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {infoData?.map((item, index) => (
          <Info key={index} text={item.text} textValue={item.textValue} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CustomerSection;
