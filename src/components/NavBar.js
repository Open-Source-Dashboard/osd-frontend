import { Link } from 'react-router-dom';
import AuthButtons from '../auth/AuthButtons';

const NavBar = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  
  return (
    <nav className="p-0.5 bg-gradient-to-r from-primary to-secondary">
      <div className="flex items-center justify-between w-full pl-1 pr-1 mx-auto  border-gray-300 rounded-lg">
        <Link to="/" className="flex items-center space-x-3">
          <h1 className="self-center p-3 pb-2 mt-2 xs:text-m sm:text-l md:text-xl lg:text-3xl
          text-teal-300 
          ">Donut Dashboard
          <h2 className="self-center py-0 text-lg font-normal sm:text-m md:text-l lg:text-l mt-0 mb-0">Virtually Sweet Rewards for Opensource Project Contributions</h2>
          </h1>
        </Link>
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
