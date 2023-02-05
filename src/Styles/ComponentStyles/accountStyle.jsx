import styled from "styled-components";

export const AccountWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  


  .social_acct {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-self: center;
}

.twit_icon {
  color: #229df0;
}

.fb_icon {
  color: #0865c2;
}

.social_acct img {
  padding-right: 15px;
  /* padding-left: 15px; */
  padding-top: 3px;
  width: 20px;
  height: 20px;
  /* margin-left: 10px; */
}

.social_acct img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.social_acct .twit_icon:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.social_acct .fb_icon:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}
`