import styled from "styled-components";

export const FooterWrap = styled.div`
  .foot {
  text-align: left;
  background-color: #000000;
  color: #bdc2ca;
  padding: 25px 10px 10px 10px;
  font-size: 12px;
  /* margin-top: 20px; */
}
.foot_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_flex img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.foot_flex img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.foot_item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_item p {
  border-right: 1px solid #d9dad6;
  padding: 0 7px 0 7px;
  margin-bottom: 15px;
  padding-top: 1px;
}

p.last_p {
  border-right: none;
}

.social_icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
}

.whatsapp:hover {
  color: #00ff00;
}

.twitter:hover {
  color: #229df0;
}

.email:hover {
  color: #ff0000;
}

.linkedin:hover {
  color: #0865c2;
}

.copy {
  padding-top: 10px;
  text-align: center;
  font-weight: 900;
  font-size: 10px;
  color: #ffffff;
  border-top: #bdc2ca;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .foot_flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 425px) {
}

@media (max-width: 320px) {
}
`