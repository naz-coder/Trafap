import React from "react";
import {AccountWrap} from "../../Styles/ComponentStyles/accountStyle";
import TwitterIcon from "@mui/icons-material/Twitter";
import google_icon from "../assets/images/google_icon.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import yahoo_i from "../assets/images/yahoo_i.svg";

const account = () => {
  return (
    <AccountWrap>
      <div className="social_acct">
      {/* <div className="twit_btn">
        <TwitterIcon className="twit_icon" />
      </div> */}
      <div className="google_btn">
        <img src={google_icon} alt="G-Icon"></img>
      </div>
      <div className="fb_btn">
        <FacebookRoundedIcon className="fb_icon" />
      </div>
      {/* <div className="yahoo_btn">
        <img src={yahoo_i} alt="Y-Icon"></img>
      </div> */}
      </div>
    </AccountWrap>
  );
};

export default account;
