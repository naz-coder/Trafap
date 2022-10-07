import React from "react";
import "./slide.css";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const slide = () => {
  return (
    <div className="slide">
      <div className="title">
        <h2>Latest Traffic Updates</h2>
      </div>
      <div className="cards_top">
        <div className="card one">
          <div className="location">
            <h2>Nyanya - Abuja</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">10:00am</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Road Construction</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">Uche Felix</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card two">
          <div className="location">
            <h2>Rumuigbo - PH</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">12:01pm</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Wrong Parking</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Amara Ugwu</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card three">
          <div className="location">
            <h2>GSM Village - Lagos</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">06:12am</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Road Accicent</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Karima Abdul</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cards_mid">
        <div className="card four">
          <div className="location">
            <h2>Ikorodu - Lagos</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">11:45am</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Check Point</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Kelina Oghene</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card five">
          <div className="location">
            <h2>Lugbe - Abuja</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_mid">Medium</p>
          </div>
          <p className="time_updated">07:30am</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Bad Road</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Naza Agada</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon className="comment_icon" />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card six">
          <div className="location">
            <h2>Lokoja - Kogi</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">09:10pm</p>
          <p className="date_updated">06/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Political Rally</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Hajara Anthony</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cards_bottom">
        <div className="card seven">
          <div className="location">
            <h2>Bende - Abia</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">1:19pm</p>
          <p className="date_updated">07/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Market</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Chinaturum Olisa</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card eight">
          <div className="location">
            <h2>Chibok - Borno</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_low">Low</p>
          </div>
          <p className="time_updated">06:51am</p>
          <p className="date_updated">07/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Flood</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Garba Abdul</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon className="comment_icon" />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="card nine">
          <div className="location">
            <h2>Umuorji - Anambra</h2>
          </div>
          <div className="traffic_height">
            <p className="traffic_status">Status: </p>
            <p className="traffic_high">High</p>
          </div>
          <p className="time_updated">09:10pm</p>
          <p className="date_updated">07/10/2022</p>
          <div className="traffic_height">
            <p className="traffic_description">Description: </p>
            <p className="traffic_reason">Station of the Cross</p>
          </div>
          <div className="traffic_height">
            <p className="update_by">Updated By: </p>
            <p className="user_name">By Olaedo Eze</p>
          </div>
          <div className="user_action">
            {/* <div action_flex_left>
              <MapsUgcIcon />
            </div> */}
            <button>
              <MapsUgcIcon />
            </button>
            <div action_flex_right>
              <FavoriteBorderIcon className="icon" />
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slide;
