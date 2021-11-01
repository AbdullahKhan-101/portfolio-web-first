import React, { useEffect } from "react";
import "./Skills.css";
import Card from "./Card";
import HTML from "../../images/html.png";
import JS from "../../images/JS.png";
import Rpic from "../../images/react.png";
import node from "../../images/node.png";
import FirePic from "../../images/firebase.png";
import reduxlogo from "../../images/reduxlogo.png";
import css from "../../images/css.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="textt">
        <h1 data-aos="fade-left">Take a look at my skills</h1>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          itaque possimus ipsum dolor sit amet conse cteturdolor adipisicing
          elit. Numquam sit officia nisi. Eveniet, officia! Lorem ipsum dolor
          sit amet
        </p>
      </div>

      <div className="cards" data-aos="fade-up">
        <Card icon={HTML} title="HTML" />
        <Card icon={css} title="CSS" />
        <Card icon={JS} title="Javascript" />
        <Card icon={Rpic} title="React js" />
        <Card icon={reduxlogo} title="Redux" />
        <Card icon={Rpic} title="React Native" />
        <Card icon={FirePic} title="Firebse" />
        <Card icon={node} title="Node js" />
      </div>

      <div className="textt">
        <h1 id="portfolio" data-aos="fade-right">
          These are my Projects
        </h1>
        <p data-aos="fade-left">
          These are some of the Fictional projects that I worked on. I have
          created some projects that help me understand more of the technology
          that I use.
        </p>
      </div>
    </div>
  );
};

export default Skills;
