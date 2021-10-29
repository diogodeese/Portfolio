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
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className="ProjectsArchive-table-languages">Built With</th>
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
                    <td
                      className="ProjectsArchive-table-languages"
                      style={{
                        fontFamily: "monospace",
                        fontSize: 16,
                        color: "#787575",
                      }}
                    >
                      {project.languages.map((language, key) => (
                        <div key={key}>{(key ? " · " : "") + language}</div>
                      ))}
                    </td>
                    <td style={{ display: "flex" }}>
                      {project.links
                        .filter((link) => link.name === "GitHub")
                        .map((link, key) => (
                          <div key={key}>
                            <FiGithub
                              className="ProjectsArchive-icons"
                              onClick={() => window.open(link.link)}
                            />
                          </div>
                        ))}
                      {project.links
                        .filter((link) => link.name === "External Link")
                        .map((link, key) => (
                          <div key={key}>
                            <FiExternalLink
                              className="ProjectsArchive-icons"
                              onClick={() => window.open(link.link)}
                            />
                          </div>
                        ))}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
