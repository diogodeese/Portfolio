import { Navbar } from "../components/styles/Navbar.styled";
import {
  RightSideBar,
  LeftSideBar,
} from "../components/styles/SideBars.styled";
import Hero from "../containers/Hero";
import Projects from "../containers/Projects";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
