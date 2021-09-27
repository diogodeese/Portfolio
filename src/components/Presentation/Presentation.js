import React, { Component } from "react";
import "./Presentation.css";
import img from "../../assets/image.jpg";

class Presentation extends Component {
  render() {
    return (
      <div className="Presentation">
        <div className="Presentation-leftside">
          <h1 className="Presentation-title">I like {"\n"} to Code</h1>
        </div>
        <div className="Presentation-rightside">
          <img
            src={img}
            alt="My Beautiful Face"
            style={{ width: 640, height: 360, margin: 100 }}
          />
        </div>
      </div>
    );
  }
}

export default Presentation;
