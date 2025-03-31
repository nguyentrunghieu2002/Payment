import Info from "../../atoms/Info/Info";

const VisaOrder = () => {
  return (
    <div>
      <div
        style={{
          width: "366px",
          display: "flex",
          gap: "8px",
          flexDirection: "column",
        }}
      >
        <Info text="Current Date"></Info>
        <Info text="Service Price"></Info>
      </div>
    </div>
  );
};

export default VisaOrder;
