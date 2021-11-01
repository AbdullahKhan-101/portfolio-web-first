import React, { useEffect } from "react";
import "./Pcard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Pcard = ({ pic, title, text, tech1, tech2, tech3, livedemo, code }) => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className="pcard" data-aos="fade-up">
      <div className="img">
        <img src={pic} alt="" />
      </div>
      <div className="texxt">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="lis">
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
          {/* <li>{tech4}</li> */}
        </div>
        <div className="buttons">
          <a target="_blank" href={livedemo}>
            Live Demo
          </a>
          <a target="_blank" href={code}>
            View on github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pcard;
