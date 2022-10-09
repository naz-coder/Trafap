import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";
import Trafap_Logo from "../assets/images/Trafap_Logo.png";
import Find_Route from "../Find_Route/route";
import Signup from "../Button/Signup_Btn/signup_btn";
import DropdownMenu from "../DropdownMenu/dropdown";

const nav = () => {
  return (
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
            <Link to={`login`}>
              <p>Login</p>
            </Link>
          </li>
          <li className="menu-item">
            <Signup />
          </li>
        </ul>
      </div>
      <DropdownMenu />

      {/* <div className="nav_end">
        <ul>
          <li className="menu-item">
            <Link to={`Login`}>Login</Link>
          </li>
          <li className="menu-item">
            <Link to={`signup`}>
              <Signup />
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default nav;
