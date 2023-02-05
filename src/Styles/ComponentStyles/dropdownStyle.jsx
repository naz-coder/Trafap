import styled from "styled-components";

export const DropDownWrap = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Fira+Sans&family=Josefin+Sans:wght@300&family=Zen+Kurenaido&display=swap");

#mobile-menu {
  display: none;
  
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  #composition-button {
    /* background-color: #000000; */
    /* color: #ffe5b4; */
    color: #efb700;
    margin-left: 15vw;
  }

  #mobile-menu {
    display: block;
  }

  #composition-menu {
    background-color: #ffffff;
    border-radius: 5px;
  }

  #login-menu {
    background-color: #ffffff;
    border-radius: 5px;
    font-weight: 900;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  }

  .log_in {
    text-decoration: none;
    color: #000000;
  }

  .sign_up {
    text-decoration: none;
  }
}

@media (max-width: 425px) {
  #composition-button {
    margin-left: 6.5vw;
  }
}
@media (max-width: 320px) {
  #composition-button {
    margin-left: 2.5vw;
  }
}

`