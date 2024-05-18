import React from 'react';
import StampCardStatic from '../components/StampCardStatic';
import MyCommitsStatic from '../components/MyCommitsStatic';
import LatestContributors from '../components/LatestContributors';
import PeruseProjects from '../components/PeruseProjects';
import FeaturedProject from '../components/FeaturedProject';
import CommitGraphStatic from '../components/CommitGraphStatic';

const StaticDashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='slider-container'>
      </div>
      <main className='flex-grow'>
        {/* Row 1 */}
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <StampCardStatic />
          <MyCommitsStatic />
          <LatestContributors/>
        </div>
        {/* Row 2 */}
        <div className='flex flex-col items-center justify-center grid-cols-1 gap-4 m-4 row-3-card md:flex-rowgrid md:grid-cols-2'>
          <CommitGraphStatic />
          </div>
        {/* Row 3 */}
        <div className='flex flex-col items-center justify-center gap-4 p-4 md:flex-row'>
          <PeruseProjects className='w-full md:w-auto md:flex-grow' />
          <FeaturedProject className='w-full md:w-auto md:flex-grow' />
        </div>

      </main>
    </div>
  );
};

export default StaticDashboard;
