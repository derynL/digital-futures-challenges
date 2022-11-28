// import { Link, NavLink } from "react-router-dom";
import Today from "./Today";
import Date from "./Date";
import "./css/header.css";

const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="grow side">
          <Today />
        </div>
        <div className="grow center">
          <h1>Today's Headlines</h1>
        </div>
        <div className="grow side right">
          <Date />
        </div>
      </div>
    </header>
  );
};

export default Header;
