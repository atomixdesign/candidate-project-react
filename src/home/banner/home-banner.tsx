import React from "react";
import "./home-banner.scss";
import data from "../../Data/banner.json";

function HomeBanner() {
  const imgsrc = "/home/banner/Banner background.png";
  const downsrc = "/home/banner/Down button.svg";
  return (
    <div>
      <img className="gfg" src={data.bannerImg} />

      <div className="hero-content">
        <h1>{data.bannerText}</h1>

        <button>CONTACT US</button>
      </div>
      <div className="hero-down-button">
        <a href="#tc-section">
          <img src={downsrc} />
        </a>
      </div>
    </div>
  );
}

export default HomeBanner;
