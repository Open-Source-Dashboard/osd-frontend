import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Footer = () => {

  const { user } = useAuth();
  const githubUsername = user?.githubUsername;
  
  return (
    <footer className="w-full p-4 text-white bg-gray-800">
      <div className="flex flex-col space-y-2">
        <Link to="/about-us" className='bg-gray-md'>The Team</Link>
        <Link to="/feedback" className='bg-gray-md'>Give Feedback</Link>
        <a href="https://github.com/orgs/Open-Source-Dashboard/repositories" target="_blank" rel="noopener noreferrer" className="bg-gray-md">Donut Dashboard Repo</a>
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className='bg-gray-md'>My GitHub Profile</a>
      </div>
    </footer>
  );
};

export default Footer;