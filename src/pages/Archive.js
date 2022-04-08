import NavbarArchive from "../components/Navbar/NavbarArchive";
import { RightSideBar, LeftSideBar } from "../components/styles/SideBars";
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
