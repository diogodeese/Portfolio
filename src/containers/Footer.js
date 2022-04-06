import React from "react";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import { A } from "../components/styles/A.styled";

export default function Footer() {
  return (
    <MainContainer id="footer" height={"125px"}>
      <A href="https://github.com/diogodeese/Portfolio" target="blank">
        Built by Diogo Santos
        <br />
        Github Repository
      </A>
    </MainContainer>
  );
}
