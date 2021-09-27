import React, { Component } from "react";
import { Pages } from "./Pages";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <h1 className="Navbar-title">Diogo Santos</h1>
        <ul className="Navbar-menu">
          {Pages.map((page, key) => {
            return (
              <li key={key}>
                <a className="Navbar-links" href={page.url}>
                  {page.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
