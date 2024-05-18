import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gradient-to-r from-primary to-secondary bg-gray-900 border-gray-300 rounded-lg sm:text-m md:text-lg lg:text-l">
      <div className="flex flex-col items-center justify-center space-y-1">
      <a
          href="https://github.com/orgs/Open-Source-Dashboard/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-gray-300 rounded-md"
        >
          <span>Visit the Repository</span>
          <FaGithub />
        </a>
        <Link to="/about-us">
          The Team
        </Link>
        <Link to="/feedback">
          Give Feedback
        </Link>
      </div>
    </footer>
  );
};

export default Footer;