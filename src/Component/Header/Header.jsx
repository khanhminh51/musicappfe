import "./Header.css"
import logo from "./headphone.png"
import { Button } from "antd";

const Header = () => {
  return (
    <div className="header">
      <div className="titleBox">
        <img src={logo} alt="Logo" width="50" height="50" className="logo"></img>
        <h1 className="title">Music App Player</h1>
      </div>
      <div>
        <Button className="content">Home Page</Button>
        <Button className="content">About</Button>
        <Button className="content">People</Button>
        <Button className="content">Community</Button>
        <Button className="content">News</Button>
        <Button className="content">Contact</Button>
      </div>
    </div>
  );
};

export default Header;
