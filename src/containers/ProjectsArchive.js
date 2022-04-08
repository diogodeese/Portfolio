import React from "react";

// Utils
import { projects } from "../helpers/MyProjects";
import useWindowDimensions from "../hooks/useWindowDimensions";

// Styled Components
import { MainContainer } from "../components/styles/MainContainer.styled";
import {
  ArchiveContainer,
  ArchiveIntroduction,
} from "../components/styles/sections/ArchiveContainer.styled";
import { H1 } from "../components/styles/H1.styled";
import { H2 } from "../components/styles/H2.styled";
import { Table } from "../components/styles/Table.styled";

import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectsArchive() {
  const { width } = useWindowDimensions();
  return (
    <MainContainer display="block" style={{ marginBottom: 100 }}>
      <ArchiveIntroduction>
        <H1>Archive</H1>
        <H2 size="16px" width="400px">
          All of the projects that I made and I feel that they are good enough
          are here!
        </H2>
      </ArchiveIntroduction>
      <ArchiveContainer>
        <Table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              {width > 800 && <th>Built With</th>}
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {projects
              .sort((projectA, projectB) =>
                projectA.year > projectB.year ? -1 : 1
              )
              .map((project, key) => {
                return (
                  <tr key={key} style={{ color: "#d1cdcd", height: 50 }}>
                    <td>{project.year.toString()}</td>
                    <td>{project.title}</td>
                    {width > 800 && (
                      <td
                        style={{
                          fontFamily: "monospace",
                          fontSize: 16,
                          color: "#787575",
                        }}
                      >
                        {project.languages.map((language, key) => (
                          <>{(key ? " · " : "") + language}</>
                        ))}
                      </td>
                    )}
                    <td>
                      {project.links
                        .filter((link) => link.name === "GitHub")
                        .map((link) => (
                          <>
                            <FiGithub
                              id="icons"
                              onClick={() => window.open(link.link)}
                            />
                          </>
                        ))}
                      {project.links
                        .filter((link) => link.name === "External Link")
                        .map((link) => (
                          <>
                            <FiExternalLink
                              id="icons"
                              onClick={() => window.open(link.link)}
                            />
                          </>
                        ))}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </ArchiveContainer>
    </MainContainer>
  );
}
