import styled from "styled-components";

export const RouteWrap = styled.div`
  .route input {
  width: 25vw;
  height: 4vh;
  border-radius: 10px 0 0 10px;
  border: 1px solid #aeb1b3;
  padding-bottom: 2px;
  padding-left: 0.5rem;
  font-weight: 900;
  font-size: 0.9rem;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.route input::placeholder {
  color: #bdc2ca;
}

.route input:focus {
  outline: none;
}

.route button {
  width: 5vw;
  height: 5vh;
  border-radius: 0 10px 10px 0;
  border: 1px solid #222222;
  background-color: #222222;
  color: #ffe5b4;
  font-weight: 900;
  /* padding-bottom: 2px; */
  padding-top: 4px;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

button:hover {
  background-position: left bottom;
  cursor: pointer;
  opacity: 0.9;
  translate: 5s;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid #000000;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
  .route input {
    width: 22vw;
  }
  .route input::placeholder {
    padding-left: 10px;
    font-size: 12px;
  }

  .route button {
    width: 6vw;
  }
}

@media (max-width: 768px) {
  .route input {
    width: 50vw;
    height: 4vh;
    border-radius: 10px 10px 10px 10px;
  }

  .route input::placeholder {
    padding-left: 8px;
  }

  .route button.hidden {
    display: none;
  }
}

@media (max-width: 425px) {
  .route input {
    width: 55vw;
    height: 4vh;
    /* margin-right: 5px; */
    border-radius: 10px 10px 10px 10px;
  }

  /* .route input::placeholder {
    padding-left: 2px;
    font-size: small;
    color: #b5bb66;
  } */

  .route button.hidden {
    display: none;
  }
}

@media (max-width: 320px) {
  .route input {
    width: 55vw;
    height: 4vh;
    border-radius: 10px 10px 10px 10px;
  }

  .route button.hidden {
    display: none;
  }
}
`