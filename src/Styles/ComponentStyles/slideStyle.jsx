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

.cards_top{
  display: flex;
  flex-wrap: wrap;
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
  width: 20rem;
  height: 20rem;
  border: 1.5px solid #e9ebec;
  border-radius: 10px;
  margin: 0 3rem 4rem 3rem;
  background-color: #e9ebec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.5s;
}

.location {
  border: 1.5px solid #e9ebec;
  border-radius: 10px;
  padding: 1rem;
  background-color: #e9ebec;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 12px;
  color: #1f4690;
}

.slide p {
  padding: 0 0 0.5rem 1rem;
  font-size: 16px;
}

.traffic_height {
  display: flex;
  flex-direction: row;
}

.traffic_status {
  font-weight: 900;
  margin-top: 1.5rem;
}

.traffic_high {
  font-weight: 900;
  margin-top: 1.5rem;
  color: #ff0000;
}

.traffic_mid {
  font-weight: 900;
  margin-top: 1.5rem;
  color: #efb700;
}

.traffic_low {
  font-weight: 900;
  margin-top: 1.5rem;
  color: #297a18;
}

.user_action {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 5rem; */
  margin: 1rem 0rem 2rem 1rem;
}

.user_action button {
  color: #ffffff;
  width: 40px;
  height: 40px;
  border: 1px solid #efb700;
  background-color: #efb700;
  border-radius: 20px;
}

.action_flex_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* float: right; */
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

  .cards_top{
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .card {
    align-self: center;
    width: 20rem;
    height: 22rem;
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
  }

  .user_action {
    margin: 1rem 0rem 2rem 1rem;

  }

}

@media (max-width: 425px) {
  .card {
    width: 20rem;
    height: 22rem;
    margin-left: 1.8rem;
  }

  .card p {
    font-size: 17px;
  }
  .user_action button {
    margin-left: 0px;
    margin-right: 100px;
  }
}

/* @media (max-width: px) {
} */

@media (max-width: 320px) {
  .card {
    width: 16rem;
    height: 21rem;
    margin-left: 2rem;
  }

  .card p {
    font-size: 17px;
  }
  .user_action button {
    margin-left: 0px;
    margin-right: 100px;
  }
}

`