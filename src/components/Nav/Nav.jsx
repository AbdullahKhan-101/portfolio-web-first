import React from "react";
import "./Nav.css";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
