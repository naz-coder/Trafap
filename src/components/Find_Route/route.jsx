import React from "react";
import {RouteWrap} from "../../Styles/ComponentStyles/routeStyle";
import {SearchRouteData} from "../Utility/ProductData"

const route = () => {
  return (
    <RouteWrap>
      <div className="route">
      {/* customize the enter key for to "search" */}
      {/* <input placeholder="Enter Route Here..."></input> */}
      {SearchRouteData.map((item) => {
        return(
          <div id={item.key}>
            <input type={item.dataType} name={item.name} placeholder={item.placeholder}/>
            <button className="hidden">Search</button>
          </div>
        )
      })}
      </div>
    </RouteWrap>
  );
};

export default route;
