import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gradient-to-r from-primary to-secondary border-gray-300 bg-white bg-opacity-50 rounded-lg p-2">
      <div className="flex flex-col items-center justify-center space-y-4">
        <a href="https://github.com/orgs/Open-Source-Dashboard/repositories" target="_blank" rel="noopener noreferrer">
          Link to our Repo
        </a>
        <Link to="/about-us">
          About Us
        </Link>
        <Link to="/feedback">
          Feedback
        </Link>
      </div>
    </footer>
  );
};

export default Footer;