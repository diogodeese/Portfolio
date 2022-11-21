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
import { AText } from "../components/styles/A.styled";

export default function About() {
  return (
    <MainContainer id="about" height={"100vh"} mediaDisplay={"block"}>
      <AboutLeftContainer>
        <div style={{ display: "block", width: "100%" }}>
          <H1 size={"32px"}>About Me</H1>
          <H4 size={"16px"}>
            Hey, my name is Diogo and I enjoy creating accessible, dynamic and
            attractive interfaces. Currently, I'm studying computer science at
            <AText
              href="https://www.ips.pt/ips_si/web_page.inicial"
              target="blank"
            >
              {" "}
              Polytechnic Institute of Setúbal{" "}
            </AText>
            and developing personal projects where I can learn about
            technologies that I find amazing!
            <br /> <br />
            Nowadays I'm focused on really learning JavaScript, so I chose React
            as my main framework (Library) and started developing all kinds of
            projects that interest me!
            <br /> <br />
            These are the technologies I've been working with recently:
          </H4>

          <div style={{ display: "flex" }}>
            <Ul>
              <Li>React</Li>
              <Li>Node.js</Li>
              <Li>JavaScript</Li>
            </Ul>
            <Ul>
              <Li>Django</Li>
              <Li>Python</Li>
              <Li>TypeScript</Li>
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
