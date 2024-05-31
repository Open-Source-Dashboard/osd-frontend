import React, { useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import FeaturedProject from "../components/FeaturedProject";
import NavLeft from "../components/NavLeft";
import StampCard from "../components/StampCard";
import CommitGraph from "../components/CommitGraph";
import PeruseProjects from "../components/PeruseProjects";
import MyCommits from "../components/MyCommits";
import LatestContributors from "../components/LatestContributors";
import MapOfUsers from "./MapOfUsers";
import 'leaflet/dist/leaflet.css';


const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

const Dashboard = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useState(() => {
    const checkUser = async () => {
      console.log('TODO: Add logic to check whether authenticated user is not in database, already exists in database, or had a fetch error')
      // try {
      //   const response = await axios.get(`${API_SERVER_URL}/accounts/users`); // Double check user API endpoint
      //   setIsNewUser(response.data.isNewUser);
      //   console.log('response.data.isNewUser', response.data.isNewUser)
      // } catch (error) {
      //   console.error("Error checking user status", error);
      // }
      // setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid h-screen gap-4 m-3 mt-0" style={{ gridTemplateRows: 'repeat(12, 1fr)', gridTemplateColumns: 'repeat(18, 1fr)' }}>
      <div className="col-span-12 row-span-1 px-2 rounded-lg">
        <Title />
      </div>
      <div className="col-span-6 row-span-4 px-2 pt-0 mt-4 overflow-scroll rounded-lg bg-violet-950">
        <LatestContributors />
      </div>

      <div className="col-span-2 p-2 mb-5 row-span-7 ">
        <NavLeft />
      </div>
      
      <div className="col-span-10 p-3 bg-gray-400 rounded-lg row-span-7 ">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-2 ">
          <div className="col-span-1 row-span-1">
            <StampCard />
          </div>
          <div className="col-span-1 row-span-1 ml-2 rounded-lg ">
            <MyCommits />
          </div>

          <div className="col-span-2 row-span-3 mt-8">
            <CommitGraph />
          </div>

        </div>
      </div>
      <div className="col-span-6 row-span-4 p-2 border-4 border-white rounded-lg bg-violet-950 ">
        <FeaturedProject />
        </div>
        <div className="col-span-9 row-span-6 p-2 overflow-hidden rounded-lg bg-violet-950">
        <MapOfUsers />
      </div>
        <div className="col-span-9 row-span-6 p-2 border-4 border-white rounded-lg bg-violet-950">
        <PeruseProjects />
      </div>

    </div>
  );
};

export default Dashboard;