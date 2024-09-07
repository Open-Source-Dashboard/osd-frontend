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
        <div className="flex items-center md:grid md:row-start-1 md:row-span-2 md:col-span-9">
        <Header />
        <div className="pl-3 md:hidden"> 
          <AuthButtons />
        </div>
        </div>
        <div className="hidden md:grid md:col-span-6 md:row-start-1 md:row-span-5 min-w-50">
          <LatestContributors/>
        </div>
        <NavLeftStatic />
        <div className="flex items-center justify-center md:grid md:col-start-2 md:col-span-4 min-w-40">
          <StampCardStatic />
        </div>
        <MyCommitsStatic />
        <CommitGraphStatic />
        <div className="flex p-2 rounded-lg md:row-span-5 md:col-span-6 bg-gray md:col-start-10">
          <FeaturedProject />
        </div>

        
        <div className="md:hidden">
          <LatestContributors/>
        </div>

      </div>
  );
};

export default DashboardStatic;
