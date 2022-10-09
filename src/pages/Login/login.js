import React from "react";
import "./login.css";
import Navg from "../../components/Nav_Global/navg";
import Social_Account_Login from "../../components/Social_Account_Login/account";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
                {/* <div className="check">
                  <FormControlLabel
                    id="checkbox"
                    control={<Checkbox defaultChecked />}
                    label="Remember me"
                  />
                  <Checkbox className="checkbox" />
                </div>
                <p>Remember me</p> */}
                <p className="forgot">Forgot password?</p>
                <div className="sign_up">
                  <p>
                    New? <span>Create an account</span>
                  </p>
                </div>
              </div>
              <p className="socials">Or login with;</p>
              <Social_Account_Login />
            </form>
            {/* <div className="sign_up">
              <p>
                New? <span>Create an account</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="terms">
        <p>Terms and Privacy ©Trafap 2022</p>
      </div>
    </div>
  );
};

export default login;
