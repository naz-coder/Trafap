import React from "react";
import {HomePageWrap} from "../../Styles/PageStyles/homeStyle"
import {SearchRouteData} from "../../components/Utility/ProductData"
import Slide from "../../components/Slide/slide";
import Footer from "../../components/Footer/footer";
import Btn_Glob from "../../components/Button/Btn_Glob/btn";
import Nav_Home from "../../components/Nav_Home/nav";


const home = () => {
  return (
    <HomePageWrap>
      <div className="landing">
      <Nav_Home />
      <div className="hero">
        <div className="flex_left">
          <h3>
            What is Your Choice Location? Let's Help You Beat Traffic and
            Getting You to Your Destination in No Time!
          </h3>
          <p>Search traffic by route...</p>
        </div>
        {SearchRouteData.map((item) => {
          return(
            <div className="flex_right" key={item.key}>
              <input type={item.dataType} name={item.name} placeholder={item.placeholder}/>
              <button className="hom_btn">Search</button>
            </div>
          )
        })}
      </div>
      <Slide />
      <Btn_Glob />
      <Footer />
      </div>
    </HomePageWrap>
  );
};

export default home;
