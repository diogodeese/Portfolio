import React, { Component } from "react";
import { Link } from "react-scroll";
//import { Pages } from "./Pages";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <h1 className="Navbar-title">Diogo Santos</h1>
        <div className="Navbar-menu">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="Navbar-links"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="Navbar-links"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="skillset"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="Navbar-links"
          >
            Skillset
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="Navbar-links"
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
