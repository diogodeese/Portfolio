import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Styled Components
import styled from "styled-components";
import { H3 } from "./H3.styled";
import { AButton } from "../styles/Button.styled";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  padding-inline: 80px;
  align-items: center;
  font-size: 1.2rem;
  z-index: 1;
  background-color: #1f1f1f;
  box-shadow: 0 0 6px #131313;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h3 {
      width: 100%;
      text-align: center;
      font-size: 26px;
    }

    display: none;
  }
`;

const MenuLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  text-align: center;
  width: 97%;
  justify-content: end;

  .nav-link {
    padding: 0.5rem 1rem;
    color: #d1cdcd;
    font-family: "Rubik", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  .nav-link:hover {
    color: #ffacac;
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
`;

const links = ["Home", "About", "Projects", "Contact"];

function Links() {
  return (
    <MenuLinks>
      {links.map((link, key) => (
        <Link
          key={key}
          className="nav-link"
          to={link.toLowerCase()}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          style={{
            transitionDelay: `${key * 100}ms`,
          }}
        >
          {link}
        </Link>
      ))}
    </MenuLinks>
  );
}

export function Navbar() {
  // How much should the Navbar slide up or down
  const [slide, setSlide] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) setSlide("-80px");
    else setSlide("0px");

    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Nav
      style={{
        transform: `translate(0, ${slide})`,
        transition: "transform 300ms linear",
      }}
    >
      <H3
        size="28px"
        style={{ width: "250px", fontFamily: "Rubik", fontWeight: 400 }}
      >
        Diogo Santos
      </H3>
      <Links />
    </Nav>
  );
}

export function NavbarArchive() {
  return (
    <Nav>
      <H3
        size="28px"
        style={{ width: "250px", fontFamily: "Rubik", fontWeight: 400 }}
      >
        Diogo Santos
      </H3>
      <MenuLinks>
        <AButton href="/">Go Back</AButton>
      </MenuLinks>
    </Nav>
  );
}
