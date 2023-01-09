import React from "react";
import {RouteWrap} from "../../Styles/ComponentStyles/routeStyle";

const route = () => {
  return (
    <RouteWrap>
      <div className="route">
      {/* customize the enter key for to "search" */}
      <input placeholder="Enter Route Here..."></input>
      <button className="hidden">Search</button>
      </div>
    </RouteWrap>
  );
};

export default route;
