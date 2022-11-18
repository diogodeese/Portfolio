import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import { A } from "../components/styles/A.styled";
import styled from "styled-components";

const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.alto};
  padding-top: 5px;

  li {
    padding-bottom: 20px;
    cursor: pointer;
    transition: transform ease 400ms;
  }

  li:hover {
    position: relative;
    color: ${({ theme }) => theme.colors.sundown};
    transform: translate(0, -5px);
  }

  #icons {
    font-size: 20px;
  }
`;

export default function Footer() {
  const { width } = useWindowDimensions();
  const [socialLinks, setSocialLinks] = useState(false);

  useEffect(() => {
    if (width > 1200) setSocialLinks(false);
    if (width < 1200) setSocialLinks(true);
  }, [width]);

  return (
    <MainContainer id="footer" height={"150px"}>
      <div style={{ display: "block" }}>
        {socialLinks && (
          <div>
            <SocialLinks>
              <li>
                <FiGithub
                  id="icons"
                  alt="GitHub"
                  onClick={() => window.open("https://github.com/diogodeese/")}
                />
              </li>
              <li>
                <FiCodepen
                  id="icons"
                  alt="Codepen"
                  onClick={() => window.open("https://codepen.io/diogodeese/")}
                />
              </li>
              <li>
                <FaStackOverflow
                  id="icons"
                  alt="StackOverflow"
                  onClick={() =>
                    window.open("https://stackoverflow.com/users/15386147")
                  }
                />
              </li>
              <li>
                <FiLinkedin
                  id="icons"
                  alt="Linkedin"
                  onClick={() =>
                    window.open("https://linkedin.com/in/diogodeese/")
                  }
                />
              </li>
            </SocialLinks>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <A href="https://github.com/diogodeese/Portfolio" target="blank">
            Built by Diogo Santos
            <br />
            Github Repository
          </A>
        </div>
      </div>
    </MainContainer>
  );
}
