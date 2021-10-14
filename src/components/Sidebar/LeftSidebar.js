import React, { Component } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Sidebar.css";

class LeftSidebar extends Component {
  render() {
    return (
      <ul className="LeftSidebar">
        <li>
          <FaGithub
            className="LeftSidebar-icons"
            alt="GitHub"
            onClick={() => window.open("https://github.com/diogodeese")}
          />
        </li>
        <li>
          <FaLinkedinIn
            className="LeftSidebar-icons"
            alt="Linkedin"
            onClick={() => window.open("https://linkedin.com/in/diogodeese/")}
          />
        </li>
      </ul>
    );
  }
}

export default LeftSidebar;
