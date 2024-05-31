import { Link } from "react-router-dom";
import AuthButtons from "../auth/AuthButtons";
import { useAuth } from "../auth/AuthContext";
import { FaGithub } from "react-icons/fa";

const NavLeft = () => {
  return (
    <div>
      <div className="flex flex-col p-3 text-sm rounded-lg justify-left">
        <AuthButtons />
        <div className="flex flex-col space-y-10 text-sm justify-left">
          <a
            href={`https://github.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/orgs/Open-Source-Dashboard/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-gray-300 rounded-md"
          >
            Donut Dashboard Repo
          </a>
          <Link to="/about-us">The Team</Link>
          <Link to="/feedback">Give Feedback</Link>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
