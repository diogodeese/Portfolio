import Navbar from "../components/Navbar/Navbar";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";
import Hero from "../containers/Hero";
import Projects from "../containers/Projects";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
