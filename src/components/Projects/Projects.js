import React, { useEffect, useState } from "react";
import useWindowDimensions from "../WindowDimensions";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "./MyProjects";
import "./Projects.css";

export default function Projects() {
  const { height, width } = useWindowDimensions();
  const [projectsNumber, setProjectsNumber] = useState(8);
  const [adicionalHeigh, setAdicionalHeigh] = useState(200);

  useEffect(() => {
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
      style={{ height: height + adicionalHeigh }}
    >
      <div className="Projects-introduction">
        <h1 className="Projects-title">What have I built</h1>
      </div>
      <div className="Projects-container">
        <div className="Project-wrapper">
          {projects.slice(0, projectsNumber).map((project, index) => {
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
        <button className="Projects-button">Show All Projects</button>
      </div>
    </div>
  );
}
