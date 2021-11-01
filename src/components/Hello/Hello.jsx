import React, { useEffect } from "react";
import "./Hello.css";
import pic from "../../images/home.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hello = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="hello" id="home">
      <div data-aos="fade-right" className="text">
        <h1>Hi, I am Abdullah</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          corporis ipsum omnis doloribus repellendus harum
        </p>
        <button>See My Portfolio</button>
      </div>

      <div className="profile">
        <img data-aos="fade-left" src={pic} alt="" />
      </div>
    </div>
  );
};

export default Hello;
