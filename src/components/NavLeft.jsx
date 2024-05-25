import { Link } from 'react-router-dom';
import AuthButtons from '../auth/AuthButtons';
import { FaGithub } from 'react-icons/fa';

const NavLeft = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  
  return (
    <div>
      <div className="flex flex-col p-3 text-sm border-4 border-white rounded-lg justify-left">
          {/* Conditionally render auth buttons */}
          {isAuthenticated ? (
            <button
              className="text-base rounded-md "
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
            <div className="flex flex-col space-y-3 text-sm justify-left">
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
        </div>
    </div>
  );
};

export default NavLeft;
