import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Projects.css";

export default function Projects() {
  const { height } = useWindowDimensions();

  return (
    <div
      id="projects"
      style={{ height: height, backgroundColor: "white" }}
    ></div>
  );
}
