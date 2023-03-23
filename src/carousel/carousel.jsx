import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import h1 from "../images/h1.jpeg";
import h2 from "../images/h2.jpeg";
import h3 from "../images/h3.jpeg";
import h4 from "../images/h4.jpeg";
import h5 from "../images/h5.jpeg";
import "../carousel/carousel.css";

function Slider() {
  return (
    <div>
      <h1>Home Decor Design Gallery</h1>
      <p>
        Explore inspirational designs for every room to transform your home to a
        dream home.
      </p>
      <Carousel className="carousel">
        <div>
          <img src={h5} alt="" />
          <p className="legend">Layout One</p>
        </div>
        <div>
          <img src={h2} alt="" />
          <p className="legend">Layout Two</p>
        </div>
        <div>
          <img src={h3} alt="" />
          <p className="legend">Layout Three</p>
        </div>
        <div>
          <img src={h4} alt="" />
          <p className="legend">Layout Four</p>
        </div>
        <div>
          <img src={h1} alt="" />
          <p className="legend">Layout Five</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
