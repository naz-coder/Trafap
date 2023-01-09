import styled from "styled-components";

export const GenNavWrap = styled.div`
  .nav_route input {
  width: 28vw;
  height: 5vh;
  border-radius: 8px 0 0 8px;
  border: 1px solid #aeb1b3;
  font-weight: 900;
  padding-bottom: 2px;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}
.nav_route input::placeholder {
  padding-left: 8px;
  font-size: 15px;
  color: #bdc2ca;
}

.nav_route button {
  width: 7vw;
  height: 6vh;
  border-radius: 0 8px 8px 0;
  border: 1px solid #000000;
  background-color: #000000;
  color: #ffe5b4;
  font-weight: 900;
  padding-bottom: 5px;
  font-size: 17px;
  font-family: "Archivo Narrow", sans-serif;
  font-family: "Fira Sans", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Zen Kurenaido", sans-serif;
}

.nav_route button:hover {
  cursor: pointer;
  opacity: 0.9;
  translate: 5s;
  color: #ffffff;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
  .nav_route input {
    width: 35vw;
    height: 6vh;
    border-radius: 8px 0 0 8px;
  }

  .nav_route input::placeholder {
    padding-left: 10px;
  }

  .nav_route button {
    width: 8vw;
    height: 7vh;
    padding-bottom: 6px;
  }
}

@media (max-width: 768px) {
  .nav_route input {
    width: 45vw;
    height: 6vh;
    border-radius: 8px;
    margin-right: 2.5rem;
  }

  .nav_route input::placeholder {
    padding-left: 12px;
    font-size: 17px;
  }

  .nav_route button {
    display: none;
  }
}

@media (max-width: 425px) {
  .nav_route input {
    width: 65vw;
    height: 6vh;
    border-radius: 8px;
    margin-right: 1rem;
  }

  .nav_route input::placeholder {
    padding-left: 10px;
    font-size: 15px;
  }
}

@media (max-width: 320px) {
}
`

export const HomeNavWrap = styled.div`
  .nav_home {
  padding: 15px 10px 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1f4690;
  width: 100vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
}

.nav_home img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.nav_home img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.log_in {
  color: #000000;
  text-decoration: none;
}

.nav_end ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav_end ul li {
  padding-right: 10px;
}

.nav_end ul li p {
  color: #bdc2ca;
  font-weight: 900;
}

.nav_end ul li p:hover {
  cursor: pointer;
  color: #000000;
  translate: 5s;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .nav_end {
    display: none;
  }
}

@media (max-width: 425px) {
  .nav_home {
    padding: 15px 1px 15px 1px;
  }

  .nav_end ul li p {
    font-size: 15px;
    padding-bottom: 4px;
  }
}

@media (max-width: 320px) {
  .nav_home {
    padding: 15px 1px 15px 1px;
  }

  .nav_end ul li p {
    font-size: 15px;
    padding-bottom: 4px;
  }
}
`