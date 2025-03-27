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

const BookingContent = ({
  size,
  weight,
  lineHeight,
  heightDiv,
  widthDiv,
  textHeader,
  textValue,
  parentHeight,
  parentWidth,
}: BookingContentProps) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        width: widthDiv,
        height: heightDiv,
        backgroundColor: "#F9F9F9",
      }}
    >
      <div
        style={{
          width: parentWidth,
          height: parentHeight,
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Text
          color="#B4B6BC"
          lineHeight={lineHeight}
          size={size}
          text={textHeader}
          weight={weight}
        />
        <Text
          color="#273D52"
          lineHeight={lineHeight}
          size={size}
          text={textValue}
          weight={weight}
        />
      </div>
    </div>
  );
};

export default BookingContent;
