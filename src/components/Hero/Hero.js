import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Hero.css";

export default function Hero() {
  const { height } = useWindowDimensions();

  return (
    <div id="home" className="Hero" style={{ height: height }}>
      <div className="Hero-container">
        <h3 className="Hero-before-title">Hi, my name is</h3>
        <h1 className="Hero-title">
          Diogo Santos.
          <br />I solve problems by coding.
        </h1>
        <h3 className="Hero-under-title">
          I'm someone that likes to learn new technologies and work with
          enthusiastic teams.
        </h3>
        <a
          className="Hero-download-button"
          href="/images/myw3schoolsimage.jpg"
          download
        >
          Check my Resume
        </a>
      </div>
    </div>
  );
}
