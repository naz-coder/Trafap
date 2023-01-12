import styled from "styled-components";
import hero from '../../components/assets/images/hero.jpg';

export const HomePageWrap = styled.div`
.hero {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 8.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../components/assets/images/hero.jpg");
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero});
    width: 100vw;
    height: 55vh;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  }
.flex_left {
  padding-left: 20px;
}

.flex_left h3 {
  width: 38vw;
  font-size: 35px;
  font-weight: 900;
  color: #ffffff;
}

.flex_left p {
  font-size: 16px;
  font-weight: 900;
  /* color: #aeb1b3; */
  color: #efb700;
}

.flex_right {
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  padding-right: 20px;
}

.flex_right input {
  width: 24.1vw;
  height: 6vh;
  border-radius: 7px;
  border: 1px solid #aeb1b3;
  padding-bottom: 2px;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  font-weight: 900;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.flex_right input::placeholder {
  color: #bdc2ca;
}

.flex_right input:focus{
  outline: none;
}

.flex_right button {
  width: 25vw;
  height: 6vh;
  border-radius: 7px;
  border: 1px solid #efb700;
  background-color: #efb700;
  color: #1f4690;
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 13px;
  margin-top: 13px;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.flex_right button:hover {
  background-position: left bottom;
  border: 1px solid #efb700a7;
  background-color: #efb700a7;
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
  color: #ffffff;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
  .hero {
    padding-top: 8.5rem;
    height: 55vh;
  }

  .flex_left {
    padding-bottom: 70px;
  }
  .flex_left h3 {
    font-size: 30px;
    width: 25rem;
  }

  .flex_left p {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 11.4rem;
    height: 50vh;
  }

  .flex_left {
    text-align: center;
    margin-bottom: 9rem;
    /* consider removing the margin-left below */
    margin-left: -15px;
  }

  .flex_right {
    display: flex;
    flex-direction: column;
    margin-bottom: 27px;
    padding-left: 32px;
  }

  .flex_left h3 {
    width: 45vw;
    font-size: 28px;
    font-weight: 900;
  }

  .flex_right input {
    width: 38vw;
    height: 6vh;
    margin-top: -180px;
    /* margin-top: -12rem; */
  }

  .flex_right button {
    width: 38vw;
    height: 6vh;
  }
}

@media (max-width: 425px) {
  .hero {
    padding-top: 11.4rem;
    height: 45vh;
  }

  /* .flex_right {
    padding-left: 20px;
  } */

  .flex_left h3 {
    width: 85vw;
  }

  .flex_right input {
    width: 75vw;
    height: 6vh;
    margin-top: -180px;
    /* margin-top: -12rem; */
  }

  .flex_right button {
    width: 75vw;
    height: 6vh;
    margin-left: 0rem;
  }
}

@media (max-width: 320px) {
  .hero {
    padding-top: 11.4rem;
    height: 52vh;
  }

  .flex_left h3 {
    width: 85vw;
    font-size: 24px;
    font-weight: 900;
  }

  .flex_right {
    padding-left: 25px;
  }

  .flex_right input {
    width: 75vw;
    height: 6vh;
    margin-top: -200px;
    /* margin-top: -12rem; */
  }

  .flex_right button {
    width: 75vw;
    height: 6vh;
  }
}

`