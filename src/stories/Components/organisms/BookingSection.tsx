import BookingAndOrderTitle from "../molecules/BookingAndOrderTitle";
import BookingContent from "../molecules/BookingContent";

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

interface BookingHeadProps {
  text: string;
  size: string;
  weight: string;
  lineHeight: string;
  color: string;
}

interface BookingSectionProps {
  bookingHead: BookingHeadProps;
  fromDate: BookingContentProps;
  toDate: BookingContentProps;
  duration: BookingContentProps;
  location: BookingContentProps;
}

const BookingSection = ({
  bookingHead,
  fromDate,
  toDate,
  duration,
  location,
}: BookingSectionProps) => {
  return (
    <>
      <div>
        <BookingAndOrderTitle {...bookingHead}></BookingAndOrderTitle>
      </div>
      <div
        style={{
          width: "366px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BookingContent {...fromDate}></BookingContent>
          <BookingContent {...toDate}></BookingContent>
        </div>
        <BookingContent {...duration}></BookingContent>
        <BookingContent {...location}></BookingContent>
      </div>
    </>
  );
};

export default BookingSection;
