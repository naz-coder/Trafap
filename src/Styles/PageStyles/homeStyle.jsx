import styled from "styled-components";
import hero from '../../components/assets/images/hero.jpg';

export const HomePageWrap = styled.div`
.hero {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 15rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../components/assets/images/hero.jpg");
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero});
    width: 100vw;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  }

.flex_left h3 {
  width: 38vw;
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
}

.flex_left p {
  font-size: 25px;
  font-weight: 900;
  color: #efb700;
}

.flex_right {
  display: flex;
  flex-direction: column;
  padding-top: 25px;
}

.flex_right input {
  width: 28rem;
  height: 6vh;
  border-radius: 7px;
  border: 1px solid #aeb1b3;
  padding-bottom: 2px;
  padding-left: 1rem;
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
  width: 29rem;
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

.flex_right button:hover {
  outline: none;
}


/* MEDIA QUERY */
@media (max-width: 1500px){
  .hero {
    height: 55vh;
  }

  .flex_left h3 {
  font-size: 45px;
}

.flex_right input {
  width: 24rem;
}

.flex_right button {
  width: 25rem;
}

}

@media (max-width: 1024px){
  .flex_left h3 {
  font-size: 35px;
}

}


@media (max-width: 960px) {
  .hero {
    padding-top: 10.5rem;
    height: 40vh;
  }

  .flex_left {
    padding-bottom: 70px;
  }
  .flex_left h3 {
    font-size: 30px;
    width: 25rem;
  }

  .flex_left p {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    height: 60vh;
  }

  .flex_left {
    text-align: center;
    margin-bottom: 3rem;
  }

  .flex_right {
    display: flex;
    flex-direction: column;
    margin-bottom: 27px;
    /* padding-left: 32px; */
  }

  .flex_left h3 {
    width: 73vw;
    font-size: 33px;
  }

  .flex_left p {
    font-size: 25px;
  }

  .flex_right input {
    margin-top: -180px;
  }
}

@media (max-width: 425px) {
  .hero {
    padding-top: 8rem;
    height: 60vh;
  }

  .flex_left h3 {
    width: 85vw;
  }

  .flex_right input {
  width: 20rem;
  margin-top: -140px;
}

.flex_right button {
  width: 21rem;
}

}

@media (max-width: 320px) {
  .hero {
    padding-top: 8rem;
    height: 50vh;
  }

  .flex_left h3 {
    width: 85vw;
    font-size: 24px;
    font-weight: 900;
  }

  .flex_left p {
    font-size: 18px;
  }

  .flex_right input {
    width: 15rem;
    margin-top: -145px;
  }

  .flex_right button {
    width: 16rem;
  }
}

`