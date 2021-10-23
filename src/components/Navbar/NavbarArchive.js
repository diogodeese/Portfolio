import React from "react";
import { useHistory } from "react-router";
import "./Navbar.css";

export default function NavbarArchive() {
  const history = useHistory();

  return (
    <nav className="Navbar">
      <h1 className="Navbar-title">Diogo Santos</h1>
      <div className="Navbar-menu">
        <button
          className="Navbar-button"
          onClick={() => {
            history.push("/");
          }}
        >
          Go Back
        </button>
      </div>
    </nav>
  );
}
