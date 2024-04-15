import React from "react";
import StampCard from "../components/StampCard";
import MyCommits from "../components/MyCommits";
import LatestContributors from "../components/LatestContributors";
import PeruseProjects from "../components/PeruseProjects";
import FeaturedProject from "../components/FeaturedProject";
import Tbd1 from "../components/Tbd1";
import Tbd2 from "../components/Tbd2";
import Tbd3 from "../components/Tbd3";

const Dashboard = () => {
  return (
      <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-4 p-4 bg-purple-200 md:grid-cols-3">
                  <StampCard />
                  <MyCommits/>
                  <LatestContributors />
              </div>
              {/* Row 2 */}
              <div className="flex flex-col items-center justify-center gap-4 p-4 bg-cyan-200 md:flex-row">
                  <PeruseProjects className="w-full md:w-auto md:flex-grow" />
                  <FeaturedProject className="w-full md:w-auto md:flex-grow" />
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 gap-4 p-4 bg-purple-200 md:grid-cols-3">
                  <Tbd1 />
                  <Tbd2 />
                  <Tbd3 />
              </div>
          </main>
      </div>
  );
};

export default Dashboard;