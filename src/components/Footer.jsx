import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useLocation } from 'react-router-dom';

const Footer = ({ isAuthenticated }) => {

  const { user } = useAuth();
  const githubUsername = user?.github_username;
  const location = useLocation();
  console.log('User:', user);
  
  return (
    <footer className="w-full p-4 text-white bg-gray-800">
      <div className="flex flex-col space-y-2">
        
        {location.pathname === "/about-us" ? (
          <Link to="/" className="bg-gray-md">Home</Link>
        ) : (
          <Link to="/about-us" className='bg-gray-md'>The Team</Link>
        )}
        
        {location.pathname === "/feedback" ? (
          <Link to="/" className="bg-gray-md">Home</Link>
        ) : (
          <Link to="/feedback" className='bg-gray-md'>Give Feedback</Link>
        )}
        
        <a href="https://github.com/orgs/Open-Source-Dashboard/repositories" target="_blank" rel="noopener noreferrer" className="bg-gray-md">Donut Dashboard Repo</a>
        
        {isAuthenticated && (
          <a href={`https://github.com/${githubUsername}#js-contribution-activity`} target="_blank" rel="noopener noreferrer" className='bg-gray-md'>My GitHub Profile</a>
        )}

        </div>
    </footer>
  );
};

export default Footer;