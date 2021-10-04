import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Presentation.css";
import img from "../../assets/image.jpg";

export default function Presentation() {
  const { height } = useWindowDimensions();

  return (
    <div id="home" className="Presentation" style={{ height: height }}>
      <div className="Presentation-leftside">
        <h3 className="Presentation-before-title">Hi, my name is</h3>
        <h1 className="Presentation-title">
          Diogo Santos
          <br />
          and I like to Code.
        </h1>
      </div>
      <div className="Presentation-rightside">
        <img
          src={img}
          alt="My Beautiful Face"
          style={{ width: 640, height: 360, margin: 100, borderRadius: 5 }}
        />
      </div>
    </div>
  );
}
