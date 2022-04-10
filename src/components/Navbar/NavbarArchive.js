import React from "react";

import "./Navbar.css";

// Styled Components
import { AButton } from "../styles/Button.styled";

export default function NavbarArchive() {
  return (
    <nav className="Navbar">
      <h1 className="NavbarArchive-title">Diogo Santos</h1>
      <div className="Navbar-menu">
        <AButton href="/">Go Back</AButton>
      </div>
    </nav>
  );
}
