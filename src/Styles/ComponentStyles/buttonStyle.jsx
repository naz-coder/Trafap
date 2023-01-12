import styled from 'styled-components';

export const GenButton = styled.div`
.gen_btn {
  margin-bottom: 7rem;
  text-align: left;
  padding-left: 12rem;
}

.gen_btn button {
  width: 6rem;
  height: 2.5rem;
  border-radius: 20px;
  border: 1px solid #1f4690;
  background-color: #1f4690;
  color: #ffffff;
  font-weight: 900;
  font-size: 15px;
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
  translate: 5s;
  color: #000000;
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
  width: 4.5vw;
  height: 5vh;
  border-radius: 7px;
  border: 1px solid #efb700;
  background-color: #efb700;
  color: #1f4690;
  font-weight: 900;
  padding-bottom: 2px;
  margin-right: 20px;
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