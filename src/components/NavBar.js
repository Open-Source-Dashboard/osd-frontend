
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/donut-connection-logo.png';

const NavBar = () => {
  return (
    <nav className="p-4 text-white bg-purple-800">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo and home link */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Donut Connection Logo" className="h-2 sm:h-4" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Some Text Here</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/getting-started" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white">
            Getting Started
          </Link>
          <Link to="/contributor-map" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700 hover:text-white">
            Contributor Map
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;