import React from "react";
import "./Card.css";
import html from "../../images/html (1).png";

const Card = () => {
  return (
    <div className="card">
      <div className="img">
        <img src={html} alt="" />
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <button></button>
    </div>
  );
};

export default Card;
