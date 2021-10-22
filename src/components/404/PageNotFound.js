import React from "react";
import useWindowDimensions from "../WindowDimensions";
import "./PageNotFound.css";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
  const { height } = useWindowDimensions();
  const history = useHistory();

  return (
    <div className="PageNotFound" style={{ height: height }}>
      <div className="PageNotFound-container">
        <h1 className="PageNotFound-title">404</h1>
        <h3 className="PageNotFound-description">Page Not Found</h3>
        <button
          className="PageNotFound-button"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
