import styled from "styled-components";
import login_hero from '../../components/assets/images/login_hero.jpg';

export const LoginPageWrap = styled.div`
.login {
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

.user_login {
  padding: 2rem 3rem 3rem 2.5rem;
  width: 20rem;
  height: 21.5rem;
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

.user_login h2 {
  padding-bottom: 1.5rem;
  text-align: center;
}

.login_form {
  display: flex;
  flex-direction: column;
}

.login_form label.login_label {
  text-align: left;
  font-size: 13px;
  padding-left: 10px;
}

.login_form input.login_input {
  width: 19.8rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #aeb1b3;
  /* background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-left: 0.5rem;
  padding-bottom: 0.2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.login_form input.login_input::placeholder {
  color: #919496;
}

.login_form input.login_input,
.login_input1:focus {
  outline: none;
}

.login_form input.login_input[type="text"],
input.login_input[type="password"] {
  color: #000000;
  padding-left: 2px;
  font-weight: bolder;
  font-size: 15px;
}

.login_form button {
  width: 20.5rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #1f4690;
  background-color: #1f4690;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #ffe5b4;
  padding-bottom: 2px;
  margin-top: -15px;
  margin-bottom: 7px;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

.login_form button:hover {
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

.more_option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 100;
  font-size: 15px;
}

.more_option p.forgot {
  color: #ff0000;
  font-weight: 900;
  text-decoration: underline;
  font-size: 13px;
}

.sign_up p span {
  color: #1f4690;
  font-weight: 900;
}

.redir_sign_up {
  text-decoration: none;
}

p.socials {
  margin-top: 2rem;
  font-size: 13px;
}

.terms {
  padding-top: -10rem;
  text-align: center;
  font-size: 13px;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
  .login {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_login {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {

  .login {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_login {
    padding: 2rem 3rem 2rem 3rem;
    width: 20rem;
  }

  .login_form input.login_input {
  width: 40.5vw;
  }

  .login_form button {
  width: 41.65vw;

  }
}

@media (max-width: 425px) {
  .login {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  
  .user_login {
    width: 14rem;
    height: 21.5rem;
  }

  .user_login h2 {
    font-size: 22px;
  }

  .login_form label.login_label {
    margin-left: -1rem;
  }

  .login_form input.login_input {
    width: 15.5rem;
  }

  .login_form button {
    width: 16.1rem;
  }

  .user_login input{
    margin-left: -1rem;
  }

  .user_login button {
    margin-left: -1rem;
  }

  .more_option {
    font-size: 12px;
  }
}

@media (max-width: 320px) {
  .login {
    padding: 7rem 0rem 0.1rem 0rem;
  }

  .user_login {
    width: 14rem;
    height: 20.5rem;
    padding: 2rem 1rem 2rem 1rem;
  }

  .user_login h2 {
    font-size: 20px;
  }

  .login_form label.login_label {
    margin-left: -0.3rem;
  }

  .login_form input.login_input {
    width: 13.5rem;
  }

  .login_form button {
    width: 14.1rem;
  }

  .user_login input {
    margin-left: 0rem;
  }

  .user_login button {
    margin-left: 0rem;
  }

  .more_option {
    font-size: 12px;

  }
}
`