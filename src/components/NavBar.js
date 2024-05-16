import { Link } from 'react-router-dom';
import logo from '../assets/donut-logo-dark-purple.png';
import AuthButtons from '../auth/AuthButtons';

const NavBar = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  
  return (
    <nav className="p-1 bg-gradient-to-r from-primary to-secondary">
      <div className="flex items-center justify-between w-full mx-auto border-gray-300 bg-white bg-opacity-50 rounded-lg p-1">
        {/* Logo and home link */}
        <Link to="/" className="flex items-center space-x-3">
        {/* <img src={logo} alt="Donut Logo" className="h-20 mr-3 sm:h-32" /> */}
          <h1 className="self-center p-5 mt-4 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Donut Dashboard
           {/* Opensource Project Contributions */}
           {/* <h2 className="self-center p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
             Donut Dashboard
            </h2> */}
            <h2 className="self-center p-2 text-lg sm:text-lg md:text-lg lg:text-lg">
             For Opensource Project Contributions
            </h2>
          </h1>
          
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* <Link to="/getting-started" className="px-3 py-2 text-base font-medium rounded-md">
            Getting Started
          </Link>
          <Link to="/contributor-map" className="px-3 py-2 text-base font-medium rounded-md">
            Contributor Map
          </Link> */}
          
          {/* Conditionally render auth buttons */}
          {isAuthenticated ? (
            <button
              className="px-3 py-2 text-base rounded-md"
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
