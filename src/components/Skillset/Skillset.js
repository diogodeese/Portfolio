import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Skillset.css";

export default function Skillset() {
  const { height } = useWindowDimensions();

  return <div id="skillset" style={{ height: height }}></div>;
}
