import React from "react";
import {LoginPageWrap} from "../../Styles/PageStyles/loginStyle";
import { Link } from "react-router-dom";
import Nav_Home from "../../components/Nav_Home/nav";
import Social_Account_Login from "../../components/Social_Account_Login/account";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/footer";

const login = () => {
  return (
    <LoginPageWrap>
      <div  className="wrap">
      <Nav_Home />
      <div className="login">
        <div className="user_login">
          {/* Concatenate the welcome tag below to take in and update the name of every user when they return */}
          <h2>Welcome back to Trafap</h2>
          <div login_form>
            <form className="login_form">
              <label className="login_label">Email Address </label>
              <input
                className="login_input"
                type={"text"}
                placeholder="e.g example@mail.com"
              ></input>

              <label className="login_label">Password </label>
              <input
                className="login_input"
                type={"password"}
                placeholder="e.g 123-a45Z6"
              ></input>

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
                    New?
                    <Link to={`/signup`} className="redir_sign_up">
                      <span>Create an account</span>
                    </Link>
                  </p>
                </div>
              </div>
              <p className="socials">Or login with;</p>
              <Social_Account_Login />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="terms">
        <p>Terms and Privacy ©Trafap 2022</p>
      </div> */}
      <Footer />
      </div>
    </LoginPageWrap>
  );
};

export default login;
