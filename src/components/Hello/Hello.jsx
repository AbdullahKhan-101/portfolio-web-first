import React from "react";
import "./Hello.css";
import pic from "../../images/azadbhai.jpg";

const Hello = () => {
  return (
    <div className="hello">
      <div className="text">
        <h1>Hello, I am Abdullah</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br /> Consectetur ducimus reprehenderit quaerat neque <br />
          ea perferendis sunt id!
        </p>
        <button>See My Portfolio</button>
      </div>
      <div className="profile">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Hello;
