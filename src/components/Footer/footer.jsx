import React from "react";
import {FooterWrap} from "../../Styles/ComponentStyles/footerStyle";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footer = () => {
  return (
    <FooterWrap>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <img src={Trafap_Logo} alt="Logo"></img>
        </div>
        <div className="foot_item">
          <p>Partners & Affiliates</p>
          <p>How to claim your points</p>
          <p className="last_p">About Us</p>
        </div>
        <div className="foot_item">
          <p>FCT - Abuja, Nigeria</p>
          <p className="last_p">(+234) 8167265619</p>
        </div>
        <div className="foot_item">
          <div className="social_icons">
            <WhatsAppIcon className="whatsapp" />
            <TwitterIcon className="twitter" />
            <EmailIcon className="email" />
            <LinkedInIcon className="linkedin" />
          </div>
        </div>
      </div>
      <p className="copy">© Trafap 2022</p>
      </div>
    </FooterWrap>
  );
};

export default footer;
