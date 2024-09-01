import { Link } from "react-router-dom";
import AuthButtons from "../auth/AuthButtons";

const NavLeft = () => {

  return (
    <div className="flex flex-col hidden p-3 text-sm rounded-lg justify-left md:flex md:max-w-xs">
      <div className="flex-col w-full space-y-2 bg-gray-800">
        <AuthButtons />
      </div>
      <div>
        <div className="flex flex-col hidden space-y-2 md:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/orgs/Open-Source-Dashboard/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md"
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