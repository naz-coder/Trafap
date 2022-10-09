import React from "react";
import "./login.css";
import Navg from "../../components/Nav_Global/navg";

const login = () => {
  return (
    <div className="login">
      <Navg />
      <div className="user_login">
        {/* Concatenate the welcome tag below to take in and update the name of every user when they return */}
        <h2>Welcome Back to Trafap</h2>
        <div login_form>
          <form className="login_form">
            <input placeholder="Email or Username"></input>
            <input placeholder="Password"></input>
            <button className="login_btn">Login</button>
            <div className="more_option">
              <p>Forgot password?</p>
              <p>Create an account</p>
            </div>
          </form>
          <div>
            <p>Terms and Privacy © Trafap 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
