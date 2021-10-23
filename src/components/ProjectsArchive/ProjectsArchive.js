import React from "react";
import useWindowDimensions from "../WindowDimensions";
import { useHistory } from "react-router-dom";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../MyProjects";
import "./ProjectsArchive.css";

export default function ProjectsArchive() {
  const { height } = useWindowDimensions();
  const history = useHistory();

  return (
    <div style={{ minHeight: height }}>
      <div className="ProjectsArchive-introduction">
        <h1 className="ProjectsArchive-title">Archive</h1>
        <h4 className="ProjectsArchive-description">
          All of the projects that I made and I feel that they are good enough
          are here!
        </h4>
      </div>
      <div className="ProjectsArchive-container">
        <table style={{ width: "60%" }}>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Built With</th>
            <th>Links</th>
          </tr>
          {projects.map((project, key) => {
            return (
              <tr key={key} style={{ color: "#d1cdcd", height: 50 }}>
                <td>{project.year.toString()}</td>
                <td>{project.title}</td>
                <td>
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
                          className="Project-icons"
                          onClick={() => window.open(link.link)}
                        />
                      </>
                    ))}
                  {project.links
                    .filter((link) => link.name === "External Link")
                    .map((link) => (
                      <>
                        <FiExternalLink
                          className="Project-icons"
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
      <button onClick={() => history.push("/")}>Go Back</button>
    </div>
  );
}
