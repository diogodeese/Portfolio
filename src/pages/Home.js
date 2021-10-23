import Navbar from "../components/Navbar/Navbar";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skillset from "../components/Skillset/Skillset";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Hero />
      <Projects />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  );
}
