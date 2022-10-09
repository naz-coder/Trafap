import "./navg.css";
import React from "react";
import { Link } from "react-router-dom";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";
import Find_Route from "../Find_Route/route";

const navg = () => {
  return (
    <div className="nav_home">
      <Link to="/">
        <img src={Trafap_Logo} alt="Logo"></img>
      </Link>
      <div className="nav_mid">
        <Find_Route />
      </div>
    </div>
  );
};

export default navg;
