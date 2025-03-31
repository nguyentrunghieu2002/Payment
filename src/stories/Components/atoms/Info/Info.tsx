import "../Text/Text.css";

interface infoProps {
  text: string;
  textValue?: string | number;
  color?: string;
  fontWeight?: string;
}

const Info = ({ text, textValue, color }: infoProps) => {
  return (
    <>
      <div
        style={{
          width: "366px",
          height: "18px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: "#B4B6BC",
          }}
        >
          {text}
        </span>
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: color,
          }}
        >
          {textValue}
        </span>
      </div>
    </>
  );
};

export default Info;
