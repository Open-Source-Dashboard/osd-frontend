import { Link } from 'react-router-dom';
import AuthButtons from '../auth/AuthButtons';
import { useAuth } from "../auth/AuthContext";
import { FaGithub } from 'react-icons/fa';

const NavLeft = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  const { user } = useAuth();

  return (
    <div>
      <div className="flex flex-col p-3 text-sm rounded-lg justify-left">
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
        <div className="flex flex-col space-y-10 text-sm justify-left">
        <a
            href={`https://github.com/${user.github_username}#js-contribution-activity`}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github Profile
          </a>
          <a
            href="https://github.com/orgs/Open-Source-Dashboard/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-gray-300 rounded-md"
          >
            <span>Donut Dashboard Repo</span>
          </a>
          <Link to="/about-us">
            The Team
          </Link>
          <Link to="/feedback" >
            Give Feedback
          </Link>
        </div>

        </div>
    </div>
  );
};

export default NavLeft;
