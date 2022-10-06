import React from "react";
import "./home.css";
import landing from "../../components/assets/images/landing.png";

const home = () => {
  return (
    <div className="landing">
    <div className="hero">
      <div className="flex_left">
        <h3>
          What is Your Choice Location? Let's Help You Beat Traffic and Getting
          You to Your Destination in No Time!
        </h3>
        <p>Search traffic by route...</p>
      </div>
      <div className="flex_right">
        <input placeholder="Enter Route Here..."></input>
        <button className="home_btn">Search</button>
      </div>
      </div>
      <div className="slide">
        <h3>Latest Traffic Updates</h3>
      </div>
    </div>
  );
};

export default home;
