import Header from "../components/Header";
import FeaturedProject from "../components/FeaturedProject";
import NavLeft from "../components/NavLeft";
import StampCardStatic from "../components/StampCardStatic";
import CommitGraphStatic from "../components/CommitGraphStatic";
import PeruseProjects from "../components/PeruseProjects";
import MyCommitsStatic from "../components/MyCommitsStatic";
import LatestContributors from "../components/LatestContributors";
import MapOfUsers from "./MapOfUsers";
import "leaflet/dist/leaflet.css";

const StaticDashboard = () => {
  return (
    <div
      className="grid h-screen gap-4 pt-3 m-3"
      style={{
        gridTemplateRows: "repeat(12, 1fr)",
        gridTemplateColumns: "repeat(18, 1fr)",
      }}
    >
      <div className="col-span-12 row-span-1 px-2 rounded-lg">
        <div>
          <Header />
        </div>
      </div>
      <div className="col-span-6 row-span-3 px-1 pt-0 mt-4 overflow-scroll rounded-lg bg-gray">
        <LatestContributors />
      </div>

      <div className="col-span-2 p-2 mb-5 row-span-6 ">
        <NavLeft />
      </div>

      <div className="col-span-10 p-3 rounded-lg bg-purple row-span-7">
        <div className="grid h-full grid-cols-2 grid-rows-6 gap-2">
          <div className="col-span-1 row-span-4">
            <StampCardStatic />
          </div>
          <div className="col-span-1 row-span-4 ml-2 rounded-lg">
            <MyCommitsStatic />
          </div>

          <div className="col-span-2 row-span-7">
            <CommitGraphStatic />
          </div>
        </div>
      </div>
      <div className="col-span-6 row-span-5 p-2 rounded-lg bg-gray ">
        <FeaturedProject />
      </div>
      <div className="col-span-7 row-span-8 p-2 overflow-hidden rounded-lg bg-gray">
        <MapOfUsers />
      </div>
      <div className="col-span-11 row-span-8 p-2 rounded-lg bg-gray">
        <PeruseProjects />
      </div>
    </div>
  );
};

export default StaticDashboard;
