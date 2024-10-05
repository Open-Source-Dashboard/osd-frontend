import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeaturedProject from "../components/FeaturedProject";
import NavLeft from "../components/NavLeft";
import StampCard from "../components/StampCard";
import CommitGraph from "../components/CommitGraph";
import PeruseProjects from "../components/PeruseProjects";
import MyCommits from "../components/MyCommits";
import LatestContributors from "../components/LatestContributors";
import MapOfUsers from "./MapOfUsers";
import "leaflet/dist/leaflet.css";
import AuthButtons from "../auth/AuthButtons";
import Footer from "../components/Footer";


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
      className="flex-col m-3 space-y-5 lg:h-screen lg:gap-4 lg:grid lg:grid-cols-18 lg:grid-rows-12">
      <div className="flex-col items-center lg:grid lg:row-start-1 lg:row-span-2 lg:col-span-9">
        <Header />
      </div>
      <div className="p-0 px-4 lg:pb-4 lg:hidden">
        <AuthButtons />
      </div>
      <div className="hidden lg:grid lg:col-span-7 lg:row-start-1 lg:row-span-5">
        <LatestContributors />
      </div>
      <NavLeft />
      <div className="flex items-center justify-center lg:pl-10 lg:grid lg:col-start-2 lg:col-span-5 ">
        <StampCard />
      </div>
      <div className="flex items-center justify-center lg:grid lg:col-start-7 lg:col-span-3 ">
        <MyCommits />
      </div>
      <CommitGraph />
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
        <LatestContributors />
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

export default Dashboard;
