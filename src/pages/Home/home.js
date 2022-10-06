import React from "react";
import "./home.css";
import landing from "../../components/assets/images/landing.png";

const home = () => {
  return (
    <div className="home_flex">
      <div className="flex_left">
        <h3>What is Your Choice Location? Let's Help You Beat Traffic!</h3>
        <p>Search traffic by route...</p>
      </div>
      <div className="flex_right">
        <input placeholder="Enter Route Here..."></input>
        <button className="home_btn">Search</button>
      </div>
    </div>
  );
};

export default home;
