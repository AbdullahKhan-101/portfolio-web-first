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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
