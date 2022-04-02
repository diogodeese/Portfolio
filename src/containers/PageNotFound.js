import React from "react";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { H2 } from "../components/styles/H2.styled";
import { Button } from "../components/styles/Button.styled";

export default function PageNotFound() {
  const { height } = useWindowDimensions();
  const history = useHistory();

  return (
    <MainContainer height={height + "px"}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <H1>404</H1>
        <H2>Page Not Found</H2>
        <Button onClick={() => history.push("/")}>Go Back</Button>
      </div>
    </MainContainer>
  );
}
