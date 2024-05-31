import React from 'react';
import NavLeftStatic from '../components/NavLeftStatic';

// Reduced the static dashboard for testing purposes
const StaticDashboard = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='slider-container'>
      </div>
      <main className='flex-grow'>
          <h1 style={{fontSize:'2em', color:'yellow', marginLeft:'2%'}}>** Login to see the live dashboard **</h1>
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <NavLeftStatic />
        </div>
      </main>
    </div>
  );
};

export default StaticDashboard;
