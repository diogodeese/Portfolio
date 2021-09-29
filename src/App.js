import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Projects />
    </div>
  );
}

export default App;
