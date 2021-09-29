import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Presentation.css";
import img from "../../assets/image.jpg";

export default function Presentation() {
  const { height } = useWindowDimensions();

  return (
    <div id="home" className="Presentation" style={{ height: height }}>
      <div className="Presentation-leftside">
        <h1 className="Presentation-title">I like {"\n"} to Code</h1>
      </div>
      <div className="Presentation-rightside">
        <img
          src={img}
          alt="My Beautiful Face"
          style={{ width: 640, height: 360, margin: 100, borderRadius: 10 }}
        />
      </div>
    </div>
  );
}
