import styled from "styled-components";
import login_hero from "../../components/assets/images/login_hero.jpg"

export const SignUpWrap = styled.div`
  .signup {
  /* float: right; */
  padding: 20rem 0rem;
  font-weight: 900;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${login_hero});
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.user_signup {
  padding: 2rem 3rem 3rem 3rem;
  width: 20rem;
  height: 28rem;
  background-color: #ffffff;
  /* background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)); */
  border: 1.5px solid none;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../components/assets/images/login_bg.jpg"); */
  display: block;
  border-radius: 3px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.7);
}

.user_signup h2 {
  padding-bottom: 1rem;
  font-size: 20px;
  text-align: center;
}

.signup_form {
  display: flex;
  flex-direction: column;
}

.signup_form label.signup_label {
  text-align: left;
  font-size: 13px;
  padding-left: 10px;
}

.signup_form input.signup_input {
  width: 18.9rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #aeb1b3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.signup_form input.signup_input::placeholder {
  color: #bdc2ca;
}

.signup_form input:focus {
  outline: none;
}

.signup_form input[type="text"],
input[type="email"],
input[type="password"] {
  color: #ffffff;
  padding-left: 2px;
  font-weight: bolder;
  font-size: 15px;
}

/* .signup_form .form_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */

.signup_form button {
  width: 19.5rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #1f4690;
  background-color: #1f4690;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #ffe5b4;
  padding-bottom: 2px;
  margin-top: -2px;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

.signup_form button:hover {
  background-position: left bottom;
  cursor: pointer;
  opacity: 0.9;
  translate: 5s;
  color: #ffffff;
  background-color: #161925;
  border: 1px solid #161925;
}

/* #checkbox {
    padding-top: -2px;
    padding-left: -10rem;
    font-size: 5px;
    color: #000000;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  } */

.redir_login {
  text-decoration: none;
}

.sign_up p {
  text-align: center;
  font-size: 13px;
}

.sign_up p span {
  color: #1f4690;
  font-weight: 900;
  padding-left: 0.5rem;
}

p.socials {
  margin-top: 1rem;
  font-size: 13px;
}

/* .terms {
  padding-top: -10rem;
  text-align: center;
  font-size: 13px;
} */

/* MEDIA QUERY */
@media (max-width: 960px) {
  .signup {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_signup {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .signup {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_signup {
    padding: 3rem 3rem 2rem 3rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }

  .user_signup h2 {
    padding-bottom: 0.5rem;
    margin-top: -1rem;
    font-size: 1.4rem;
  }

  .signup_form label.signup_label {
    padding-left: 5px;
  }

  .signup_form input.signup_input {
    width: 19.2rem;
  }

  .signup_form input[type="text"],
  input[type="email"],
  input[type="password"] {
    color: #ffffff;
    padding-left: 2px;
    font-weight: bolder;
    font-size: 15px;
  }

  .signup_form button {
    width: 19.5rem;
  }

  /* .terms {
    font-size: 12px;
  } */
}

@media (max-width: 425px) {
  .signup {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_signup {
    width: 15rem;
    /* width: 14rem; */
    height: 26rem;
    padding-top: 3rem;
  }

  .user_signup h2 {
    padding-bottom: 0.4rem;
    margin-top: -1.1rem;
    font-size: 1rem;
  }

  .signup_form label.signup_label {
    /* padding-left: -5px; */
    margin-left: -1rem;
  }

  .signup_form input.signup_input {
    width: 16.4rem;
  }

  .signup_form button {
    width: 16.95rem;
  }

  .user_signup input,
  button {
    margin-left: -1rem;
  }
  p.socials {
    margin-top: 0.8rem;
  }
}

@media (max-width: 320px) {
  .signup {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_signup {
    width: 14rem;
    height: 26rem;
    padding: 2rem 1rem 2rem 1rem;
  }

  .user_signup h2 {
    padding-bottom: 0.4rem;
    margin-top: -1.1rem;
    font-size: 1rem;
  }

  .signup_form label.signup_label {
    /* padding-left: -5px; */
    margin-left: 0.1rem;
  }

  .signup_form input.signup_input {
    width: 13.5rem;
  }

  .signup_form button {
    width: 14rem;
  }

  .user_signup input,
  button {
    margin-left: 0rem;
  }

  p.socials {
    margin-top: 0.8rem;
  }
}
`

