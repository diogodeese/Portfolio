import React, { Component } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Sidebar.css";

class LeftSidebar extends Component {
  render() {
    return (
      <ul className="LeftSidebar">
        <li>
          <FiGithub
            className="LeftSidebar-icons"
            alt="GitHub"
            onClick={() => window.open("https://github.com/diogodeese")}
          />
        </li>
        <li>
          <FiLinkedin
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
