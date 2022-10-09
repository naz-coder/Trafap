import React from "react";
import "./login.css";
import Navg from "../../components/Nav_Global/navg";
import Social_Account_Login from "../../components/Social_Account_Login/account";

const login = () => {
  return (
    <div className="wrap">
      <Navg />
      <div className="login">
        <div className="user_login">
          {/* Concatenate the welcome tag below to take in and update the name of every user when they return */}
          <h2>Welcome back to Trafap</h2>
          <div login_form>
            <form className="login_form">
              <input placeholder="Email or Username"></input>
              <input placeholder="Password"></input>
              <button className="login_btn">Login</button>
              <div className="more_option">
                <p>Remember me</p>
                <p>Forgot password?</p>
              </div>
              <div>Login with</div>
              {/* <Social_Account_Login /> */}
            </form>
            <div>
              <p>New? Create an account</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Terms and Privacy © Trafap 2022</p>
      </div>
    </div>
  );
};

export default login;
