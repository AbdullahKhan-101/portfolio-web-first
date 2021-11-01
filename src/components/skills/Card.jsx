import React from "react";
import "./Card.css";
// import JS from "../../images/javascript.png";

const Card = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={icon} alt="" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
