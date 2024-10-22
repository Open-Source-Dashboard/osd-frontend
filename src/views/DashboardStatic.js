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
import TestBlock from "../components/TestBlock";


const DashboardStatic = () => {
  return (
    <div
      className="m-4 flex-col lg:m-3 space-y-5 lg:space-y-0 lg:h-screen lg:gap-4 lg:grid lg:grid-cols-[repeat(18,1fr)] lg:grid-rows-[repeat(12,1fr)]">
      <div className="flex-col items-center lg:row-span-1 lg:col-span-12">
        <Header />
      </div>
      <div className="p-0 px-4 lg:hidden">
        <AuthButtons />
      </div>
      <div className="hidden lg:grid lg:col-span-6 lg:pt-4 lg:overflow-auto lg:row-span-3">
        <LatestContributors />
      </div>
      <div className="flex-col hidden text-sm rounded-lg justify-left lg:grid lg:p-2 lg:row-span-6 lg:col-span-2">
        <NavLeftStatic />
      </div>

      <div className="lg:col-span-10 lg:rounded-lg lg:row-span-7">
        <div className="space-y-5 lg:space-y-0 lg:h-full lg:gap-2 lg:grid-rows-6 lg:grid-cols-2 lg:grid">
          <div className="flex items-center justify-center lg:row-span-4 lg:grid lg:col-span-1">
            <StampCardStatic />
          </div>
          <div className="flex items-center justify-center lg:col-span-1 lg:row-span-4">
            <MyCommitsStatic />
          </div>
          <div className="h-full lg:col-span-2 lg:row-span-7">
            <CommitGraphStatic />
          </div>
        </div>
      </div>
      <div className="flex w-full p-2 rounded-lg bg-blue lg:row-span-5 lg:col-span-6">
        <FeaturedProject />
      </div>
      <div className="hidden p-2 rounded-lg lg:grid lg:col-span-7 lg:row-span-8 bg-gray">
        <MapOfUsers />
      </div>
      <div className="flex p-2 rounded-lg bg-gray lg:row-span-8 lg:col-span-11">
        <PeruseProjects />
      </div>
      <div className="lg:hidden">
        <LatestContributors />
      </div>
      <div className="p-2 rounded-lg xs:grid min-h-60 lg:hidden bg-gray" >
        <MapOfUsers />
      </div>
      <div className="lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardStatic;
