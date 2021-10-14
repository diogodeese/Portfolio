import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Presentation.css";

export default function Presentation() {
  const { height } = useWindowDimensions();

  return (
    <div id="home" className="Presentation" style={{ height: height }}>
      <div className="Presentation-container">
        <h3 className="Presentation-before-title">Hi, my name is</h3>
        <h1 className="Presentation-title">
          Diogo Santos.
          <br />I solve problems by coding.
        </h1>
        <h3 className="Presentation-under-title">
          I'm software engineer that likes to learn new technologies and work
          with enthusiastic teams.
        </h3>
        <a
          className="Presentation-download-button"
          href="/images/myw3schoolsimage.jpg"
          download
        >
          Check my Resume
        </a>
      </div>
    </div>
  );
}
