import React from "react";
import useWindowDimensions from "../WindowDimensions";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../MyProjects";
import "./ProjectsArchive.css";

export default function ProjectsArchive() {
  const { height } = useWindowDimensions();

  return (
    <div style={{ Height: height }}>
      <div className="ProjectsArchive-introduction">
        <h1 className="ProjectsArchive-title">Archive</h1>
        <h4 className="ProjectsArchive-description">
          All of the projects that I made and I feel that they are good enough
          are here!
        </h4>
      </div>
      <div className="ProjectsArchive-container">
        <table>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Built With</th>
            <th>Links</th>
          </tr>
          {projects
            .sort((projectA, projectB) =>
              projectA.year > projectB.year ? -1 : 1
            )
            .map((project, key) => {
              return (
                <tr key={key} style={{ color: "#d1cdcd", height: 50 }}>
                  <td>{project.year.toString()}</td>
                  <td>{project.title}</td>
                  <td
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      color: "#787575",
                    }}
                  >
                    {project.languages.map((language, index) => (
                      <>{(index ? " · " : "") + language}</>
                    ))}
                  </td>
                  <td>
                    {project.links
                      .filter((link) => link.name === "GitHub")
                      .map((link) => (
                        <>
                          <FiGithub
                            className="ProjectsArchive-icons"
                            onClick={() => window.open(link.link)}
                          />
                        </>
                      ))}
                    {project.links
                      .filter((link) => link.name === "External Link")
                      .map((link) => (
                        <>
                          <FiExternalLink
                            className="ProjectsArchive-icons"
                            onClick={() => window.open(link.link)}
                          />
                        </>
                      ))}
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
