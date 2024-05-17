import React, { useState } from 'react';
import StampCard from '../components/StampCard';
import MyCommits from '../components/MyCommits';
import LatestContributors from '../components/LatestContributors';
import PeruseProjects from '../components/PeruseProjects';
import FeaturedProject from '../components/FeaturedProject';
import axios from "axios";
import GetStartedModal from "../components/GetStartedModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommitGraph from '../components/CommitGraph';

const Dashboard = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useState(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get('/accounts/users'); // Double check user API endpoint
        setIsNewUser(response.data.isNewUser);
      } catch (error) {
        console.error('Error checking user status', error);
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
<div className='flex flex-col min-h-screen bg-gradient-to-r from-primary to-secondary '>
      <div className='slider-container'>
        {isNewUser && <GetStartedModal  />
        }
        
      </div>
      <main className='flex-grow'>
        {/* Row 1 */}
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <StampCard />
          <MyCommits />
          <LatestContributors />
        </div>
        {/* Row 3 */}
        <div className='flex flex-col items-center justify-center grid-cols-1 gap-4 m-4 row-3-card md:flex-rowgrid md:grid-cols-2'>
        {/* <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2'> */}
          <CommitGraph />
        </div>
        {/* Row 2 */}
        <div className='flex flex-col items-center justify-center gap-4 p-4 md:flex-row'>
          <PeruseProjects className='w-full md:w-auto md:flex-grow' />
          <FeaturedProject className='w-full md:w-auto md:flex-grow' />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
