import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";

const RightBar = styled.ul`
  display: table-row;
  position: fixed;
  bottom: 0;
  right: 50px;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #d9c5c5;
  }

  li,
  a {
    padding-bottom: 20px;
    padding-top: 5px;
    color: #d9c5c5;
    writing-mode: vertical-rl;
    letter-spacing: 3px;
    font-weight: 600;
    cursor: pointer;
    transition: transform ease 400ms;
    text-decoration: none;
  }

  li a:hover {
    position: relative;
    color: #ffacac;
    transform: translate(0, -5px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .RightSidebar {
      display: none;
    }
`;

export function RightSideBar() {
  return (
    <RightBar>
      <li>
        <a href="mailto:diogodeese@gmail.com">diogodeese@gmail.com</a>
      </li>
    </RightBar>
  );
}

const LeftBar = styled.ul`
  display: table-row;
  position: fixed;
  color: #d9c5c5;
  bottom: 0;
  left: 50px;
  padding-top: 5px;

  li {
    padding-bottom: 20px;
    cursor: pointer;
    transition: transform ease 400ms;
  }

  li:hover {
    position: relative;
    color: #ffacac;
    transform: translate(0, -5px);
  }

  #icons {
    font-size: 24px;
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #d9c5c5;
  }
`;

export function LeftSideBar() {
  return (
    <LeftBar>
      <li>
        <FiGithub
          id="icons"
          alt="GitHub"
          onClick={() => window.open("https://github.com/diogodeese")}
        />
      </li>
      <li>
        <FiLinkedin
          id="icons"
          alt="Linkedin"
          onClick={() => window.open("https://linkedin.com/in/diogodeese/")}
        />
      </li>
    </LeftBar>
  );
}
