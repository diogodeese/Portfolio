import React, { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Resume from "../assets/other/resume.pdf";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import { HeroContainer } from "../components/styles/sections/HeroContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { H2 } from "../components/styles/H2.styled";
import { H3 } from "../components/styles/H3.styled";
import { AButton } from "../components/styles/Button.styled";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const { height } = useWindowDimensions();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <MainContainer
      data-Aos="fade-down"
      data-aos-easing="ease-out-quart"
      id="home"
      height={height + "px"}
    >
      <HeroContainer>
        <H3 color={"#d14949"}>Hi, my name is</H3>
        <H1>
          Diogo Santos.
          <br />I solve problems by coding.
        </H1>
        <H2 size={"20px"} width={"600px"}>
          I'm someone that likes to learn new technologies and work with
          enthusiastic teams.
        </H2>
        <AButton href={Resume} target="blank">
          Check my Resume
        </AButton>
      </HeroContainer>
    </MainContainer>
  );
}
