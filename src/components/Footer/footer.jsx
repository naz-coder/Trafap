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
        <div className="foot_item contact-us">
          <p>FCT - Abuja, Nigeria</p>
          <p className="last_p"><span className="sm_contact"><span className="sm_contact_1_mobile">Naza: (+234) 8167265619</span><span className="sm_contact_2_mobile"> <span className="pipe-txt">|</span> Emma: (+234) 9031757021</span></span></p>
        </div>
        <div className="foot_item">
          <div className="social_icons">
            <a href="https://wa.me/2348167265619"><WhatsAppIcon className="whatsapp"/></a>
            <a href="https://www.twitter.com/TechSiz"><TwitterIcon className="twitter" /></a>
            <a href="mailto:nazanajemba@gmail.com/"><EmailIcon className="email" /></a>
            <a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><LinkedInIcon className="linkedin" /></a>
          </div>
        </div>
      </div>
      <p className="copy">&copy; Trafap 2022</p>
      </div>
    </FooterWrap>
  );
};

export default footer;
