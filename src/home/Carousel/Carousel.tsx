import React, { Component } from "react";
import "./Carousel.scss";
import Slider from "./slider";
import data from "../../Data/carousel.json";

function Carousel() {
  return (
    <div className="carousel-section">
      <div className="carousel-sect-head">Carousel Section</div>
      <div className="carousel">
        <Slider
          options={{
            autoPlay: true,

            fullscreen: true,
          }}
        >
          {data.carouselItems.map((data, index) => (
            <div className="carousel-cell" key={index}>
              <div className="carousel-content">
                <div className="caorusel-image">
                  <img src={data.img} alt="" />
                </div>
                <div className="c-item">
                  <div className="carousel-head">Slide title</div>
                  <div className="carousel-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </div>
                  <div className="carousel-button">
                    <button>BUTTON</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
