import { Link } from 'react-router-dom';
import logo from '../assets/donut-logo-dark-purple.png';
import AuthButtons from '../auth/AuthButtons';

const NavBar = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  
  return (
    <nav className="p-1 bg-gradient-to-r from-primary to-secondary'> ">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo and home link */}
        <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Donut Logo" className="h-20 mr-3 sm:h-32" />
          <h1 className="self-center xs:text-sm sm:text-sm md:text-lg lg:text-xl ">
            Opensource Project Contributions
          </h1>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/getting-started" className="px-3 py-2 text-base font-medium rounded-md">
            Getting Started
          </Link>
          <Link to="/contributor-map" className="px-3 py-2 text-base font-medium rounded-md">
            Contributor Map
          </Link>
          
          {/* Conditionally render auth buttons */}
          {isAuthenticated ? (
            <button
              className="px-3 py-2 text-base font-medium rounded-md"
              onClick={() => {
                localStorage.removeItem('github_token'); // Clear the token
                window.location.reload(); // Reload to update UI
              }}
            >
              Logout
            </button>
          ) : (
            <AuthButtons /> 
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
