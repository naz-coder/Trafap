import React from "react";
import "./footer.css";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const footer = () => {
  return (
    <div className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <img src={Trafap_Logo} alt="Logo"></img>
          <p>Partners & Affiliates</p>
          <p>How to claim your points</p>
        </div>
        <div className="foot_item">
          <h2>Contact Us</h2>
          <p>FCT - Abuja, Nigeria</p>
          <p>(+234)8167265619</p>
          <div className="icon">
            <WhatsAppIcon className="whatsapp" />
            <TwitterIcon className="twitter" />
            <EmailIcon className="email" />
          </div>
        </div>
        <div className="foot_item">
          <h2>Connect with us</h2>
          <p>About Us</p>
          <div className="news">
            <input placeholder="Get our Newsletter"></input>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <p className="copy">© Trafap 2022</p>
    </div>
  );
};

export default footer;
