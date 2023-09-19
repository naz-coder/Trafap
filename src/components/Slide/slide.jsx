import React from "react";
import {SlideWrap} from "../../Styles/ComponentStyles/slideStyle.jsx";
import {TrafficUpdateData, TrafficLocationData} from "../../components/Utility/ProductData";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const slide = () => {
  return (
    <SlideWrap>
      <div className="slide">
      <div className="title">
        <h2>Latest Traffic Updates</h2>
      </div>

      <div className="cards_top">
        {/* card one */}
        {TrafficUpdateData.map((item, index) => 
          <div className="card" key={item.id}>
          <div className="location">
            <h2 name={item.name}>{item.location.address}</h2>
          </div>
            <div key={item.key}>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high" name={item.status}>{item.status}</p>
          </div>
          <p className="time_updated">{item.time}</p>
          <p className="date_updated">{item.date}</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: {item.description}</p>
            {/* <p className="traffic_reason"></p> */}
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: {item.updatedBy}</p>
            {/* <p className="user_name">Uche Felix</p> */}
          </div>
          </div>

          {/* user action */}
          <div className="user_action">
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
          </div>
        )
        }
      </div>
      </div>
    </SlideWrap>
  );
};

export default slide;

