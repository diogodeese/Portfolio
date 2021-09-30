import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-80px" });
    } else {
      this.setState({ slide: "0px" });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    return (
      <nav
        className="Navbar"
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: "transform 300ms linear",
        }}
      >
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
