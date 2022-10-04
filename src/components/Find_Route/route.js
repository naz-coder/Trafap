import React from "react";
import "./route.css";

const route = () => {
  return (
    <div className="route">
      {/* customize the enter key for to "search" */}
      <input placeholder="Enter Route Here..."></input>
      <button className="hidden">Search</button>
    </div>
  );
};

export default route;
