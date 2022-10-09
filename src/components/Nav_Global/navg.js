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
      <div className="nav_route">
        <input placeholder="Enter Route Here..."></input>
        <button className="navg_btn">Search</button>
      </div>
    </div>
  );
};

export default navg;
