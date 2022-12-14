import styled from "styled-components";

export const SlideWrap = styled.div`
  .slide {
  margin-top: 50px;
  text-align: center;
}

.title h2 {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 25px;
}

.cards_top,
.cards_mid,
.cards_bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: left;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.card {
  /* width: 15vw;
  height: 34vh; */
  width: 15rem;
  height: 15rem;
  border: 1.5px solid #e9ebec;
  border-radius: 10px;
  margin-bottom: 3rem;
  background-color: #e9ebec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: 0.5s;
}
.location {
  border: 1.5px solid #e9ebec;
  border-radius: 10px;
  padding-bottom: 4px;
  padding-left: 10px;
  margin-top: 1px;
  background-color: #e9ebec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 12px;
  color: #1f4690;
}

.slide p {
  padding-left: 10px;
  font-size: 16px;
}
.traffic_height {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  /* padding-left: 10px; */
}

.traffic_status {
  font-weight: 900;
  margin-top: 10px;
}

.traffic_high {
  font-weight: 900;
  margin-top: 10px;
  /* padding-left: 10px; */
  color: #ff0000;
}

.traffic_mid {
  font-weight: 900;
  margin-top: 10px;
  color: #efb700;
}

.traffic_low {
  font-weight: 900;
  margin-top: 10px;
  color: #297a18;
}

.user_action {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-left: -35px;
}

.user_action button {
  color: #ffffff;
  width: 40px;
  height: 40px;
  border: 1px solid #efb700;
  background-color: #efb700;
  border-radius: 20px;
  padding-top: 4px;
  margin-left: 30px;
  margin-right: 60px;
}

.action_flex_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon {
  color: #404040;
  padding-left: 10px;
  padding-top: 5px;
}

.icon:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 0.5s;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .cards_top,
  .cards_mid,
  .cards_bottom {
    display: flex;
    flex-direction: column;
    justify-self: center;
  }

  .card {
    /* width: 15vw;
    height: 34vh; */
    align-self: center;
    width: 20rem;
    height: 16.5rem;
    margin-bottom: 3rem;
  }

  .location {
    padding-left: 15px;
    font-size: 15px;
  }

  .slide p {
    padding-left: 15px;
    font-size: 20px;
  }

  .traffic_status {
    font-weight: 900;
    margin-top: 10px;
  }

  .user_action {
    margin-top: 20px;
    margin-left: -80px;
  }

  .user_action button {
    margin-left: 70px;
    margin-right: 150px;
  }
}

@media (max-width: 425px) {
}

@media (max-width: 320px) {
  .card {
    width: 16rem;
    height: 16rem;
  }

  .card p {
    font-size: 17px;
  }
  .user_action button {
    margin-left: 80px;
    margin-right: 100px;
  }
}
`