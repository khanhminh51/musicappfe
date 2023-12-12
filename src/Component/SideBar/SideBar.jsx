import { Button } from "antd";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <Link to={"/"}>
        <Button>View Audio</Button>
      </Link>
      <Link to={"/audioRank"}>
        <Button>Audio Rank</Button>
      </Link>
    </>
  );
};

export default SideBar;
