import Heading from "../atoms/Heading";
import Icon from "../atoms/Icon";
import Tubudd from "../../assets/Frame 405.svg";

const Title = () => {
  return (
    <div
      style={{
        width: "398px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Heading></Heading>
      <Icon logoIcon={Tubudd} iconHeight="50px" iconWidth="50px"></Icon>
    </div>
  );
};

export default Title;
