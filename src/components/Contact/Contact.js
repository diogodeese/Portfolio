import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./Contact.css";

export default function Contact() {
  const { height } = useWindowDimensions();

  return <div id="contact" style={{ height: height }}></div>;
}
