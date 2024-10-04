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
      className="flex-col m-3 space-y-5 lg:h-screen lg:gap-4 lg:grid lg:grid-cols-18 lg:grid-rows-12">
        <div className="flex-col items-center lg:grid lg:row-start-1 lg:row-span-2 lg:col-span-9">
        <Header />
        <div className="p-0 px-4 xs:pt-4 lg:pb-4 lg:hidden"> 
          <AuthButtons />
        </div>
        </div>
        <div className="hidden lg:grid lg:col-span-7 lg:row-start-1 lg:row-span-5">
          <LatestContributors/>
        </div>
        <NavLeftStatic />
        <div className="flex items-center justify-center lg:pl-10 lg:grid lg:col-start-2 lg:col-span-5 ">
          <StampCardStatic />
        </div>
        <div className="flex items-center justify-center lg:grid lg:col-start-7 lg:col-span-3 ">
          <MyCommitsStatic />
        </div>
        <CommitGraphStatic />
        <div className="flex p-2 rounded-lg bg-blue lg:row-span-5 lg:col-span-7 lg:col-start-10">
          <FeaturedProject />
        </div>
        <div className="flex hidden p-2 rounded-lg lg:grid min-h-60 lg:col-span-5 bg-gray">
          <MapOfUsers />
        </div>
        <div className="flex p-2 rounded-lg md:col-span-11 md:row-span-10 bg-gray md:col-start-6 md:row-start-11">
          <PeruseProjects />
        </div>
        
        <div className="lg:hidden">
          <LatestContributors/>
        </div>
        <div className="hidden p-2 rounded-lg md:grid min-h-60 lg:hidden bg-gray" >
          <MapOfUsers />
        </div>
        <div className="md:hidden">
          <Footer />
        </div>

      </div>
  );
};

export default DashboardStatic;
