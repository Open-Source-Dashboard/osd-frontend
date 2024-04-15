
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/donut-logo.png';

const NavBar = () => {
  return (
    <nav className="p-1 text-white bg-green-400">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo and home link */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Donut Logo" className="h-20 mr-3 sm:h-32" /> {/* Increased logo size and added margin-right */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Opensource Project Contributions</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/getting-started" className="px-3 py-2 text-base font-medium rounded-md hover:bg-purple-600 hover:text-white">
            Getting Started
          </Link>
          <Link to="/contributor-map" className="px-3 py-2 text-base font-medium rounded-md hover:bg-purple-600 hover:text-white">
            Contributor Map
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;