import "./Text.css";

interface textProps {
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

const Text = ({ text, size, weight, lineHeight, color }: textProps) => {
  return (
    <div
      style={{
        fontWeight: weight,
        width: "fit-content",
        fontSize: size,
        lineHeight: lineHeight,
        color: color,
      }}
    >
      {text}
    </div>
  );
};

export default Text;
