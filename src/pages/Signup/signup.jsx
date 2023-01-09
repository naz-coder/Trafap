import React from "react";
import {SignUpWrap} from "../../Styles/PageStyles/signupStyle";
import { Link } from "react-router-dom";
import Nav_Home from "../../components/Nav_Home/nav";
import Social_Account_Login from "../../components/Social_Account_Login/account";
import Footer from "../../components/Footer/footer";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const signup = () => {
  return (
    <SignUpWrap>
      <div className="wrap">
      <Nav_Home />
      <div className="signup">
        <div className="user_signup">
          {/* Concatenate the welcome tag below to take in and update the name of every user when they return */}
          <h2>Create an account to update traffic</h2>
          <div signup_form>
            <form className="signup_form">
              <label className="signup_label">Full Name</label>
              <input
                className="signup_input"
                type={"text"}
                placeholder="Naza Agada"
              ></input>
              <label className="signup_label">Email Address </label>
              <input
                className="signup_input"
                type={"email"}
                placeholder="e.g example@email.com"
              ></input>
              {/* <div className="form_flex"> */}
              <label className="signup_label">Location </label>
              <input
                className="signup_input"
                type={"text"}
                placeholder="Mararaba, Kuje, Mile 1"
              ></input>
              <label className="signup_label">Password </label>
              <input
                className="signup_input"
                type={"password"}
                placeholder="e.g 123-a45Z6"
              ></input>
              {/* </div> */}
              <button className="signup_btn">Sigup</button>
              <div className="sign_up">
                <p>
                  Already have an account?
                  <Link to={`/login`} className="redir_login">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
              <p className="socials">Or sign up with;</p>
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
    </SignUpWrap>
  );
};

export default signup;
