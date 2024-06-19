import { Link } from 'react-router-dom';
import AuthButtons from '../auth/AuthButtons';
import { useAuth } from "../auth/AuthContext";

const NavLeft = () => {
  const isAuthenticated = !!localStorage.getItem('github_token');
  const { user } = useAuth();
  const githubUsername = user.github_username || "";

  return (
    <div className="flex flex-col p-3 text-sm rounded-lg justify-left">

      {isAuthenticated ? (
        <button
          className="text-base rounded-md"
          onClick={() => {
            localStorage.removeItem('github_token'); 
            window.location.reload(); // Reload to update UI
          }}
        >
          Logout
        </button>
      ) : (
        <AuthButtons />
      )}
      <div className="flex flex-col space-y-2 text-sm rounded-md justify-left">
        <a
          href={`https://github.com/${githubUsername}#js-contribution-activity`}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Profile
        </a>
        <a
          href="https://github.com/orgs/Open-Source-Dashboard/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-md"
        >
          <span>Donut Dashboard Repo</span>
        </a>
        <Link to="/about-us">
          The Team
        </Link>
        <Link to="/feedback">
          Give Feedback
        </Link>
      </div>
    </div>
  );
};

export default NavLeft;
