import { Facebook, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="firse_img_section" data-aos="fade-right">
        <h2>Getting in touch is easy</h2>
        <div className="paras">
          <p>Watsapp 03323876075 </p>
          <p>Email shamsabdullah318@gmail.com</p>
          <p>
            Web Developed By <span>Hafiz Abdullah</span>
          </p>
        </div>
        <div className="icons_herer">
          <p>Follows us on social media</p>
          <div className="iconhen">
            <WhatsApp className="wats" />
            <Facebook className="face" />
            <LinkedIn className="linked" />
          </div>
        </div>
      </div>
      <div className="second_form_section" data-aos="fade-left">
        <form>
          <input type="text" className="half" placeholder="First Name" />
          <input type="text" className="half two" placeholder="Last Name" />
          <input type="text" placeholder="Enter your email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
