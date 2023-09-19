import styled from 'styled-components';

export const GenButton = styled.div`
display: flex;
justify-content: center;
align-items: center;

.gen_btn {
  margin-bottom: 7rem;
  text-align: left;
}

.gen_btn button {
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid #1f4690;
  background-color: #1f4690;
  color: #ffffff;
  font-weight: 900;
  font-size: 17px;
  padding-bottom: 2px;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

button:hover {
  background-position: left bottom;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.5s ease-in-out;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .gen_btn {
    margin-bottom: 7rem;
    text-align: center;
    padding-left: 0px;
  }
}

@media (max-width: 425px) {
}
@media (max-width: 320px) {
}
`

export const SignupButton = styled.div`
button {
  width: 6.5vw;
  height: 5vh;
  border-radius: 7px;
  border: 1px solid #efb700;
  background-color: #efb700;
  color: #1f4690;
  font-weight: 900;
  padding-bottom: 2px;
  margin-right: 20px;
  font-size: 1.1rem;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

button:hover {
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
  button {
    width: 6vw;
    height: 5.5vh;
  }
}

@media (max-width: 768px) {
  button {
    width: 6vw;
    height: 5vh;
    border: 1px solid #1f4690;
    background-color: #ffffff;
    color: #1f4690;
  }
}

@media (max-width: 425px) {
  button {
    width: 13vw;
    height: 4.5vh;
  }
}
@media (max-width: 320px) {
  button {
    width: 15vw;
    height: 5vh;
  }
}
`