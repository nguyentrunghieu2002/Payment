import styled from "styled-components";
import Text from "../atoms/Text";

interface BookingAndOrderTitleProps {
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

const BookingAndOrderTitle = (props: BookingAndOrderTitleProps) => {
  return (
    <TitleWrapper>
      <Line />
      <div style={{ padding: "0px 16px" }}>
        <Text {...props} />
      </div>
      <Line />
    </TitleWrapper>
  );
};

export default BookingAndOrderTitle;
