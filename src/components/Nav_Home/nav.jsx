import {HomeNavWrap} from "../../Styles/ComponentStyles/navStyle";
import React from "react";
import { Link } from "react-router-dom";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";
import Find_Route from "../Find_Route/route";
import Signup from "../Button/Signup_Btn/signup_btn";
import DropdownMenu from "../DropdownMenu/dropdown";

const nav = () => {
  return (
    <HomeNavWrap>
      <div className="nav_home">
      <Link to="/">
        <img src={Trafap_Logo} alt="Logo"></img>
      </Link>
      {/* <Link>
        <img src={TrafapLogo} alt="Logo"></img>
      </Link> */}
      <div className="nav_mid">
        <Find_Route />
      </div>
      <div className="nav_end">
        <ul>
          <li className="menu-item">
            <Link to={`/login`} className="log_in">
              <p className="login_option">Login</p>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`/signup`} className="sign_up">
              <Signup />
            </Link>
          </li>
        </ul>
      </div>
      <DropdownMenu />
    </div>
    </HomeNavWrap>
  );
};

export default nav;
