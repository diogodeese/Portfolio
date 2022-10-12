import React from "react";
import Portrait from "../assets/img/Portrait.jfif";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import {
  AboutLeftContainer,
  AboutRightContainer,
} from "../components/styles/sections/AboutContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { H4 } from "../components/styles/H4.styled";
import { Ul, Li } from "../components/styles/Lists.styled";
import { Image } from "../components/styles/Image";

export default function About() {
  return (
    <MainContainer id="about" height={"80vh"} mediaDisplay={"block"}>
      <AboutLeftContainer>
        <div style={{ display: "block" }}>
          <H1 size={"32px"}>About Me</H1>
          <H4 size={"16px"} width={"450px"}>
            Hi! My name is Diogo and I enjoy automating actions and creating
            good looking interfaces. I chose this career path back in 2018 when
            I decided to join my programming school course and since then I've
            been creating projects that I like and that I find useful.
            <br /> <br />
            Nowadays I'm focused on really learning JavaScript, so I chose React
            as my main framework (Library) and started developing all kinds of
            projects that interest me!
            <br /> <br />
            These are the technologies I've been working with recently:
          </H4>
          <div style={{ display: "flex" }}>
            <Ul>
              <Li><span>▹</span> React</Li>
              <Li><span>▹</span> Node.js</Li>
              <Li><span>▹</span> JavaScript</Li>
            </Ul>
            <Ul>
              <Li><span>▹</span> Django</Li>
              <Li><span>▹</span> Python</Li>
              <Li><span>▹</span> TypeScript</Li>
            </Ul>
          </div>
        </div>
      </AboutLeftContainer>
      <AboutRightContainer>
        <Image src={Portrait} alt="Portrait" />
      </AboutRightContainer>
    </MainContainer>
  );
}
