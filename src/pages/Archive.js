import { NavbarArchive } from "../components/styles/Navbar.styled";
import {
  RightSideBar,
  LeftSideBar,
} from "../components/styles/SideBars.styled";
import ProjectsArchive from "../containers/ProjectsArchive";
import Footer from "../containers/Footer";

export default function Archive() {
  return (
    <div>
      <NavbarArchive />
      <LeftSideBar />
      <RightSideBar />
      <ProjectsArchive />
      <Footer />
    </div>
  );
}
