import Info from "../../atoms/Info";

const VisaOrder = () => {
  return (
    <div>
      <div
        style={{
          width: "366px",
          borderBottom: "1px solid #E0E0E0",
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
