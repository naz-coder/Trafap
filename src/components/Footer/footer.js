import React from "react";
import "./footer.css";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";

const footer = () => {
  return (
    <div className="foot">
      <div className="foot_left">
        <img src={Trafap_Logo} alt="Logo"></img>
        <p>Partners & Affiliates</p>
        <p>How to claim your points</p>
      </div>
      <div className="foot_mid">
        <h3>Contact Us</h3>
        <p>FCT - Abuja, Nigeria</p>
        <p>(+23)8167265619</p>
      </div>
      <div className="foot_end">
        <h3>Connect with us</h3>
        {/* Social media icons */}
        <p></p>
        <p>About Us</p>
        <input placeholder="Subscribe to our Newsletter"></input>
      </div>
      <p>&c; TechSis 2022</p>
    </div>
  );
};

export default footer;
