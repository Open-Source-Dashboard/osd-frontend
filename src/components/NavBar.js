import { Link } from 'react-router-dom';
import logo from '../assets/donut-logo-dark-purple.png';
import AuthButtons from '../auth/AuthButtons';
import { useAuth } from '../auth/AuthContext';

const NavBar = () => {
  
  return (
    <nav className="p-0.5 bg-gradient-to-r from-primary to-secondary">
      <div className="flex items-center justify-between w-full pl-1 pr-1 mx-auto border-gray-300 rounded-lg">
        <Link to="/" className="flex items-center space-x-3">
          <h1 className="self-center p-3 pb-2 mt-2 xs:text-m sm:text-l md:text-xl lg:text-3xl text-teal-300">
            Donut Dashboard
          </h1>
          <h2 className="self-center py-0 text-lg font-normal sm:text-m md:text-l lg:text-l mt-0 mb-0">
            Virtually Sweet Rewards for Opensource Project Contributions
          </h2>
        </Link>
        <div className="flex items-center space-x-4">
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
