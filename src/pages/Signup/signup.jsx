import React from "react";
import {SignUpWrap} from "../../Styles/PageStyles/signupStyle";
import { Link } from "react-router-dom";
import Nav_Home from "../../components/Nav_Home/nav";
import {SignupData} from "../../components/Utility/ProductData"
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
            {SignupData.map((items) => {
              return(
                <>
                <label className="signup_label" key={items.key} name={items.name} datatype={items.dataType}>{items.label}</label>
                <input
                  className="signup_input"
                  name={items.name}
                  required
                  key={items.key}
                  placeholder={items.placeholder}
                />
                </>
              )
            })}
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
      <Footer />
      </div>
    </SignUpWrap>
  );
};

export default signup;
