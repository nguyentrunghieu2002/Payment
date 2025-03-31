import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import styled from "styled-components";
import "./Header.css";

interface HeaderProps {
  compName: string;
  logoIcon?: string;
  iconWidth?: string;
  iconHeight?: string;
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 366px;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #e0e0e0; // Màu gray-300 trong Tailwind
`;

const Header = ({
  color,
  iconHeight,
  iconWidth,
  lineHeight,
  logoIcon,
  size,
  text,
  weight,
  compName,
}: HeaderProps) => {
  return (
    <div
      className={compName === "left-header" ? "left-header" : "middle-header"}
    >
      <Icon
        logoIcon={logoIcon || ""}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
      ></Icon>
      {compName === "left-header" && (
        <Text
          text={text}
          size={size}
          weight={weight}
          lineHeight={lineHeight}
          color={color}
        />
      )}
      {compName === "middle-header" && (
        <TitleWrapper>
          <Line />
          <div style={{ padding: "0px 16px" }}>
            <Text
              text={text}
              size={size}
              weight={weight}
              lineHeight={lineHeight}
              color={color}
            ></Text>
          </div>
          <Line />
        </TitleWrapper>
      )}
    </div>
  );
};

export default Header;
