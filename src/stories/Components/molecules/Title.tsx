import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

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

const Title = ({
  color,
  iconHeight,
  iconWidth,
  lineHeight,
  logoIcon,
  size,
  text,
  weight,
}: TitleProps) => {
  return (
    <div
      style={{
        width: "366px",
        height: "25px",
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <Icon
        logoIcon={logoIcon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      ></Icon>
      <Text
        text={text}
        size={size}
        weight={weight}
        lineHeight={lineHeight}
        color={color}
      ></Text>
    </div>
  );
};

export default Title;
