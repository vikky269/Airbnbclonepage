import React from "react";
import photogrid from "../images/photo-grid.png";

export function Hero() {
  return (
    <>
      <div className="hero">
        <img src={photogrid} alt="photo" className="hero-img" />
        <div className="hero-text">
          <h1 className="hero-text-primary">Online Experiences</h1>
          <p className="hero-text-secondary">
            Join unique interactive activities led by <br />
             one-of-a-kind -all without
            leaving  <br /> home.
          </p>
        </div>
      </div>
    </>
  );
}
