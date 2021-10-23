import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./About.css";

export default function About() {
  const { height } = useWindowDimensions();

  return <div id="about" style={{ height: height }}></div>;
}
