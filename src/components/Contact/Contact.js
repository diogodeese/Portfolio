import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Contact.css";

export default function Contact() {
  const { height } = useWindowDimensions();

  return (
    <div id="contact" className="Contact" style={{ height: height }}>
      <div className="Contact-container">
        <h2 className="Contact-title">Get In Touch</h2>
        <h4 className="Contact-description">
          Currently looking for a job and open to develop interesting projects,
          if you have something in mind that you would like to share with me
          contact me!
        </h4>
        <div className="Contact-button-div">
          <a className="Contact-button" href="mailto:diogodeese@gmail.com">
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
}
