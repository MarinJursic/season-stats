import React from "react";
import "./HeroSection.scss";

/* <video autoPlay muted loop className="video">
        <source src="/images/mix.mp4" />
      </video> */

function HeroSection() {
  return (
    <div className="hero">
      <div className="image1"></div>
      <div className="color"></div>
      <div className="image2"></div>
      <div className="overlay">
        <h2>All The Stats From Your Favorite</h2>
        <h2>NBA Players In One Place</h2>
      </div>
    </div>
  );
}

export default HeroSection;
