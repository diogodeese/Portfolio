import NavbarArchive from "../components/Navbar/NavbarArchive";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";
import ProjectsArchive from "../components/ProjectsArchive/ProjectsArchive";
import Footer from "../components/Footer/Footer";

export default function Archive() {
  return (
    <div>
      <NavbarArchive />
      <LeftSidebar />
      <RightSidebar />
      <ProjectsArchive />
      <Footer />
    </div>
  );
}
