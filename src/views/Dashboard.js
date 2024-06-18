import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";
import FeaturedProject from "../components/FeaturedProject";
import NavLeft from "../components/NavLeft";
import StampCard from "../components/StampCard";
import CommitGraph from "../components/CommitGraph";
import PeruseProjects from "../components/PeruseProjects";
import MyCommits from "../components/MyCommits";
import LatestContributors from "../components/LatestContributors";
import MapOfUsers from "./MapOfUsers";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="grid h-screen gap-4 pt-3 m-3"
      style={{
        gridTemplateRows: "repeat(12, 1fr)",
        gridTemplateColumns: "repeat(18, 1fr)",
      }}
    >
      <div className="col-span-12 row-span-1 px-2 rounded-lg p-0 p-0">
        {/* <div> */}
        <SubHeader />
        {/* </div> */}
      </div>
      <div className="col-span-6 row-span-3 px-2 pt-0 rounded-lg">
        <LatestContributors />
      </div>

      <div className="col-span-2 p-2 mb-5 row-span-7 ">
        <NavLeft />
      </div>

      <div className="col-span-10 p-3 border-4 rounded-lg border-blue row-span-7">
        <div className="grid h-full grid-cols-2 grid-rows-6 gap-2 ">
          <div className="col-span-1 row-span-4">
            <StampCard />
          </div>
          <div className="col-span-1 row-span-4 ml-2 rounded-lg">
            <MyCommits />
          </div>

          <div className="col-span-2 row-span-2">
            <CommitGraph />
          </div>
        </div>
      </div>
      <div className="col-span-6 row-span-5 p-2 rounded-lg">
        <FeaturedProject />
      </div>
      <div className="col-span-7 row-span-6 p-2 overflow-hidden rounded-lg">
        <MapOfUsers />
      </div>
      <div className="col-span-11 row-span-6 p-2 rounded-lg">
        <PeruseProjects />
      </div>
    </div>
  );
};

export default Dashboard;
