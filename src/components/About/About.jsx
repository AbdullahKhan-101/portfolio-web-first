import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className="about" id="about">
      <div className="inside_about" data-aos="fade-up">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo
          optio laudantium sed a ex voluptas quia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita animi eveniet magni. Nostrum
          hic tenetur rerum quae sit ipsam id ea harum fuga...
        </p>
      </div>
    </div>
  );
};

export default About;
