import React, { useEffect, useState } from "react";

// Utils
import { projects } from "../helpers/MyProjects";
import useWindowDimensions from "../hooks/useWindowDimensions";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import {
  ProjectsContainer,
  ProjectsWrapper,
  Project,
  ProjectFooter,
  ProjectLinks,
} from "../components/styles/sections/ProjectsContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { AButton } from "../components/styles/Button.styled";

import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const { height, width } = useWindowDimensions();
  const [projectsNumber, setProjectsNumber] = useState(8);

  useEffect(() => {
    if (width > 1600) setProjectsNumber(8);
    if (width < 1600) setProjectsNumber(6);
    if (width < 1200) setProjectsNumber(4);
    if (width < 900) setProjectsNumber(3);
  }, [width, height]);

  return (
    <MainContainer data-Aos="fade-up" id="projects" display={"block"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <H1 size={"32px"}>My Projects</H1>
      </div>
      <ProjectsContainer>
        <ProjectsWrapper>
          {projects
            .slice(0, projectsNumber)
            .filter((project) => project.showcase)
            .sort((projectA, projectB) =>
              projectA.year > projectB.year ? -1 : 1
            )
            .map((project, key) => {
              return (
                <Project
                  key={key}
                  data-Aos="fade-up"
                  style={{
                    transitionDelay: `${key * 100}ms`,
                  }}
                >
                  <FiFolder id="main-icon" />
                  <ProjectLinks>
                    {project.links
                      .filter((link) => link.name === "GitHub")
                      .map((link, key) => (
                        <li key={key}>
                          <FiGithub
                            id="icons"
                            onClick={() => window.open(link.link)}
                          />
                        </li>
                      ))}
                    {project.links
                      .filter((link) => link.name === "External Link")
                      .map((link, key) => (
                        <li key={key}>
                          <FiExternalLink
                            id="icons"
                            onClick={() => window.open(link.link)}
                          />
                        </li>
                      ))}
                  </ProjectLinks>
                  <h2>{project.title}</h2>
                  <h4>{project.description}</h4>
                  <ProjectFooter>
                    <ul>
                      {project.languages.map((language, key) => (
                        <li key={key}>{language}</li>
                      ))}
                    </ul>
                  </ProjectFooter>
                </Project>
              );
            })}
        </ProjectsWrapper>
      </ProjectsContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15%",
        }}
      >
        <AButton href="/archive">Projects Archive</AButton>
      </div>
    </MainContainer>
  );
}
