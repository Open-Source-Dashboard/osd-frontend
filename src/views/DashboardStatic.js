import Header from "../components/Header";
import FeaturedProject from "../components/FeaturedProject";
import NavLeftStatic from "../components/NavLeftStatic";
import StampCardStatic from "../components/StampCardStatic";
import CommitGraphStatic from "../components/CommitGraphStatic";
import PeruseProjects from "../components/PeruseProjects";
import MyCommitsStatic from "../components/MyCommitsStatic";
import LatestContributors from "../components/LatestContributors";
import MapOfUsers from "./MapOfUsers";
import "leaflet/dist/leaflet.css";
import Footer from "../components/Footer";
import AuthButtons from "../auth/AuthButtons";


const DashboardStatic = () => {
  return (
    <div
      className="flex-col m-3 space-y-5 md:h-screen md:gap-4 md:grid md:grid-cols-18 md:grid-rows-12">
        <div className="flex items-center md:grid md:row-start-1 md:row-span-2 md:col-span-12">
        <Header />
        <div className="pl-3 md:hidden"> 
          <AuthButtons />
        </div>
        </div>
        <div className="hidden md:grid md:col-span-4 md:row-start-1 md:row-span-5 min-w-60">
          <LatestContributors/>
        </div>
        <NavLeftStatic />
        <div className="flex items-center justify-center md:grid md:col-start-2 md:col-span-6 min-w-60">
          <StampCardStatic />
        </div>
        <MyCommitsStatic />
        <CommitGraphStatic />
        
        <div className="md:hidden">
          <LatestContributors/>
        </div>

      </div>
  );
};

export default DashboardStatic;
