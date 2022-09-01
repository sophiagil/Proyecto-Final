import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../Carrousel/SlideImg/Slide1.jpg";
import Slide2 from "../Carrousel/SlideImg/Slide2.jpg";
import Slide3 from "../Carrousel/SlideImg/Slide3.jpg";
import Slide4 from "../Carrousel/SlideImg/Slide4.jpg";

export default class Carrousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="carrousel" src={Slide1} alt="1" />
          </div>
          <div>
            <img className="carrousel" src={Slide2} alt="2" />
          </div>
          <div>
            <img className="carrousel" src={Slide3} alt="3" />
          </div>
          <div>
            <img className="carrousel" src={Slide4} alt="4" />
          </div>
        </Slider>
      </div>
    );
  }
}