import React from "react";
import useWindowDimensions from "../WindowDimensions";
import { FiGithub } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  const { height, width } = useWindowDimensions();

  return (
    <div id="projects" className="Projects" style={{ height: height }}>
      <div className="Projects-introduction">
        <h1 className="Projects-title">What have I built</h1>
      </div>
      <div className="Projects-container">
        <table>
          <tr>
            <td>
              <div className="Project">
                <h2>Mobile Zoo App</h2>
                <h4>
                  I build this mobile application because when I visited a zoo I
                  couldn't remember wich animals i did see.
                </h4>
                <div className="Project-footer">
                  <ul>
                    <li>React Native</li>
                    <li>JS</li>
                    <li>{width}</li>
                  </ul>
                  <FiGithub className="Project-footer-github" />
                </div>
              </div>
            </td>
            <td>
              <div className="Project"></div>
            </td>
            <td>
              <div className="Project"></div>
            </td>
            <td>
              <div className="Project"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="Project"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
