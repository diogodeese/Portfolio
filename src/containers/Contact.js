import React from "react";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import { ContactContainer } from "../components/styles/sections/ContactContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { H4 } from "../components/styles/H4.styled";
import { AButton } from "../components/styles/Button.styled";

export default function Contact() {
  return (
    <MainContainer id="contact" height={"fit-content"} marginTop={100} >
      <ContactContainer>
        <H1>Get In Touch</H1>
        <H4>
          I am open to develop interesting projects, if you have something in
          mind that you would like to share, contact me!
        </H4>
        <AButton href="mailto:diogodeese@gmail.com">Say Hello</AButton>
      </ContactContainer>
    </MainContainer>
  );
}
