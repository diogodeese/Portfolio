import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";
import ProjectsArchive from "../components/ProjectsArchive/ProjectsArchive";
import Footer from "../components/Footer/Footer";

export default function Archive() {
  return (
    <div>
      <LeftSidebar />
      <RightSidebar />
      <ProjectsArchive />
      <Footer />
    </div>
  );
}
