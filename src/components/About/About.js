import React from "react";
import useWindowDimensions from "../WindowDimensions";
import profilePicture from "../../assets/profile-picture.jfif";
import "./About.css";

export default function About() {
  const { height } = useWindowDimensions();

  return (
    <div id="about" className="About" style={{ height: height }}>
      <div className="About-left-container">
        <div style={{ display: "block" }}>
          <h1 className="About-title">About Me</h1>
          <h3 className="About-description">
            Im a really cool person that have no idea what to write in here, so
            Im just going to write non sense things and hope that someone helps
            me to figure out what Im.
            <br /> <br />
            Im probably a good person my Im not that sure, but I hope Im.
            <br /> <br />
            Faith in god.
          </h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="About-right-container">
        <img src={profilePicture} alt="as" className="About-image" />
      </div>
    </div>
  );
}
