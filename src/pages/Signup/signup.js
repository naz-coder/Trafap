import React from "react";
import "./signup.css";
import Navg from "../../components/Nav_Global/navg";
import Social_Account_Login from "../../components/Social_Account_Login/account";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const signup = () => {
  return (
    <div className="wrap">
      <Navg />
      <div className="signup">
        <div className="user_signup">
          {/* Concatenate the welcome tag below to take in and update the name of every user when they return */}
          <h2>Create an account to update traffic</h2>
          <div signup_form>
            <form className="signup_form">
              <input type={"text"} placeholder="Full Name"></input>
              <input type={"email"} placeholder="Email"></input>
              <div className="form_flex">
                <input type={"text"} placeholder="Location"></input>
                <input type={"password"} placeholder="Password"></input>
              </div>
              <button className="signup_btn">Sigup</button>
              <div className="sign_up">
                <p>
                  Already have an account? <span>Login</span>
                </p>
              </div>
              <p className="socials">Or sign up with;</p>
              <Social_Account_Login />
            </form>
          </div>
        </div>
      </div>
      <div className="terms">
        <p>Terms and Privacy ©Trafap 2022</p>
      </div>
    </div>
  );
};

export default signup;
