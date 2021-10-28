import React, { useEffect, useState } from "react";
import useWindowDimensions from "../WindowDimensions";
import { useHistory } from "react-router-dom";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../MyProjects";
import "./Projects.css";

export default function Projects() {
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const [projectsNumber, setProjectsNumber] = useState(8);
  const [adicionalHeigh, setAdicionalHeigh] = useState(100);

  useEffect(() => {
    if (width > 1600) {
      setProjectsNumber(8);
      setAdicionalHeigh(100);
    }

    if (width < 1600) {
      setProjectsNumber(6);
    }

    if (width < 1200) {
      setProjectsNumber(4);
    }

    if (width < 900) {
      setProjectsNumber(3);
      setAdicionalHeigh(height);
    }
  }, [width, height]);

  return (
    <div
      id="projects"
      className="Projects"
      style={{ height: height + adicionalHeigh, minHeight: 1000 }}
    >
      <div className="Projects-introduction">
        <h1 className="Projects-title">My Projects</h1>
      </div>
      <div className="Projects-container">
        <div className="Project-wrapper">
          {projects
            .slice(0, projectsNumber)
            .filter((project) => project.showcase)
            .sort((projectA, projectB) =>
              projectA.year > projectB.year ? -1 : 1
            )
            .map((project, index) => {
              return (
                <div key={index} className="Project">
                  <FiFolder className="Project-main-icon" />
                  <ul className="Project-links">
                    {project.links
                      .filter((link) => link.name === "GitHub")
                      .map((link) => (
                        <li>
                          <FiGithub
                            className="Project-icons"
                            onClick={() => window.open(link.link)}
                          />
                        </li>
                      ))}
                    {project.links
                      .filter((link) => link.name === "External Link")
                      .map((link) => (
                        <li>
                          <FiExternalLink
                            className="Project-icons"
                            onClick={() => window.open(link.link)}
                          />
                        </li>
                      ))}
                  </ul>
                  <h2>{project.title}</h2>
                  <h4>{project.description}</h4>
                  <div className="Project-footer">
                    <ul className="Project-footer-languages">
                      {project.languages.map((language) => (
                        <li>{language}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="Project-button-div">
        <button
          className="Projects-button"
          onClick={() => history.push("/archive")}
        >
          Projects Archive
        </button>
      </div>
    </div>
  );
}
