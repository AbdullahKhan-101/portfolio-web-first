import React from "react";
import Pcard from "./Pcard";
import "./Portfolio.css";
import linkedin from "../../images/linkedin.jpg";
import applee from "../../images/apple.png";
import pokemon from "../../images/pokemon.jpg";
import periodic from "../../images/periodic.jpg";
import gmail from "../../images/gmail.jpg";
import chat from "../../images/chat.jpg";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="Portfolio_cards">
        <Pcard
          pic={applee}
          title="Apple landing page"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        dolorem."
          tech1="HTML"
          tech2="CSS"
          tech3="Firebase"
          livedemo="https://appletwoweb.web.app/"
          code="https://github.com/abdullahkhan44/applewebsite-landig-page"
        />
        <Pcard
          pic={pokemon}
          title="Pokemon landing page"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem."
          tech1="HTML"
          tech2="CSS"
          tech3="Firebase"
          livedemo="https://appleweb-c29fb.web.app/"
        />
        <Pcard
          pic={periodic}
          title="Periodic table"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem."
          tech1="HTML"
          tech2="CSS"
          tech3="Firebase"
          livedemo="https://abdullahkhan44.github.io/periodic-Table/"
          code="https://github.com/abdullahkhan44/periodic-Table"
        />
        <Pcard
          pic={linkedin}
          title="Linkedin landing page"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem."
          tech1="React"
          tech2="Firebase"
        />
        <Pcard
          pic={gmail}
          title="Gmail landing page"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem."
          tech1="React"
          tech2="Firebase"
        />
        <Pcard
          pic={chat}
          title="Chat app"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dolorem."
          tech1="React"
          tech2="Firebase"
        />
      </div>
    </div>
  );
};

export default Portfolio;
