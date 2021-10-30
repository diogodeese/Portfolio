import React, { useState, useEffect } from "react";
import useWindowDimensions from "../WindowDimensions";
import profilePicture from "../../assets/profile-picture.jfif";
import "./About.css";

export default function About() {
  const { height, width } = useWindowDimensions();
  const [adicionalHeigh, setAdicionalHeigh] = useState(0);

  useEffect(() => {
    if (width < 900) {
      setAdicionalHeigh(150);
    }
  }, [width, height]);

  return (
    <div
      id="about"
      className="About"
      style={{ height: height + adicionalHeigh }}
    >
      <div className="About-left-container">
        <div style={{ display: "block" }}>
          <h1 className="About-title">About Me</h1>
          <h3 className="About-description">
            Hi! My name is Diogo and I enjoy automating actions and creating
            good looking interfaces. I chose this career path back in 2018 when
            I decided to join my programming school course and since then I've
            been creating projects that I like and that I find useful.
            <br /> <br />
            Nowadays I'm focused on really learning JavaScript, so I chose React
            as my main framework (Library) and started developing all kinds of
            projects that interest me!
            <br /> <br />
            These are the technologies I've been working with recently:
          </h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="About-right-container">
        <img
          src={profilePicture}
          alt="My beautiful face should be here"
          className="About-image"
        />
      </div>
    </div>
  );
}
