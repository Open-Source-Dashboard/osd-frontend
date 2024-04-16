import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-white bg-purple-500">
      <div className="flex flex-col items-center justify-center space-y-4">
        <a href="https://github.com/orgs/Open-Source-Dashboard/repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          Link to our Repo
        </a>
        <Link to="/about-us" className="text-white hover:text-gray-300">
          About Us
        </Link>
        <Link to="/feedback" className="text-white hover:text-gray-300">
          Feedback
        </Link>
      </div>
    </footer>
  );
};

export default Footer;