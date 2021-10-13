import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Projects.css";
import img from "../../assets/image.jpg";

export default function Projects() {
  const { height } = useWindowDimensions();

  return (
    <div id="projects" className="Projects" style={{ height: height }}>
      <div className="Project">
        <div className="Project-title">
          <h3>Hi, my name is</h3>
        </div>
        <div className="Project-image">
          <img
            src={img}
            alt="Project"
            style={{ width: 640, height: 360, borderRadius: 5 }}
          />
        </div>
      </div>
    </div>
  );
}
