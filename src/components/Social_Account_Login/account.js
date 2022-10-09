import React from "react";
import "./account.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import google_icon from "../assets/images/google_icon.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import yahoo_icon from "../assets/images/yahoo_icon.png";

const account = () => {
  return (
    <div className="social_acct">
      <button>
        <TwitterIcon className="twit" />
      </button>
      <button>
        <img src={google_icon} alt="G-Icon"></img>
      </button>
      <button>
        <FacebookRoundedIcon className="fb" />
      </button>
      <button>
        <img src={yahoo_icon} alt="Y-Icon"></img>
      </button>
    </div>
  );
};

export default account;
