import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import Skillset from "./components/Skillset/Skillset";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Presentation />
      <Projects />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
