import "./Heading.css";

const Heading = () => {
  return (
    <div className="Heading" style={{ color: "#FFFFFF" }}>
      <div
        style={{
          width: "212px",
          height: "30px",
          top: "24px",
          left: "17px",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
          letterSpacing: "0px",
        }}
      >
        PAYMENT STAGE
      </div>
      <div
        style={{
          width: "201px",
          height: "25px",
          top: "56px",
          left: "17px",
          paddingTop: "2px",
          fontSize: "15px",
          fontWeight: "700",
          lineHeight: "25px",
          letterSpacing: "0px",
        }}
      >
        Check your Tubudd order
      </div>
    </div>
  );
};

export default Heading;
