import React from 'react';
import StampCardStatic from '../components/StampCardStatic';
import MyCommitsStatic from '../components/MyCommitsStatic';
import LatestContributors from '../components/LatestContributors';
import PeruseProjects from '../components/PeruseProjects';
import FeaturedProject from '../components/FeaturedProject';
import CommitGraphStatic from '../components/CommitGraphStatic';
import NavLeft from '../components/NavLeft';

const StaticDashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='slider-container'>
      </div>
      <main className='flex-grow'>
          <h1 style={{fontSize:'2em', color:'yellow', marginLeft:'2%'}}>** Login to see the live dashboard **</h1>
        {/* Row 1 */}
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <NavLeft />
        </div>
      </main>
    </div>
  );
};

export default StaticDashboard;
