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
        <div className="pl-3 sm:hidden"> 
          <AuthButtons />
        </div>
        </div>
        <div className="hidden md:grid md:col-span-7 md:row-start-1 md:row-span-5">
          <LatestContributors/>
        </div>
        <NavLeftStatic />
        <div className="flex items-center justify-center sm:grid md:col-start-2 sm:col-span-4 ">
          <StampCardStatic />
        </div>
        <MyCommitsStatic />
        <CommitGraphStatic />
        <div className="flex p-2 rounded-lg md:row-span-5 md:col-span-7 bg-gray md:col-start-10">
          <FeaturedProject />
        </div>
        <div className="flex hidden p-2 rounded-lg md:grid min-h-60 md:col-span-5 bg-gray">
          <MapOfUsers />
        </div>
        <div className="flex p-2 rounded-lg md:col-span-11 md:row-span-10 bg-gray md:col-start-6 md:row-start-11">
          <PeruseProjects />
        </div>
        
        <div className="md:hidden">
          <LatestContributors/>
        </div>
        <div className="flex p-2 rounded-lg md:hidden min-h-60 bg-gray" >
          <MapOfUsers />
        </div>
        <div className="md:hidden">
          <Footer />
        </div>

      </div>
  );
};

export default DashboardStatic;
