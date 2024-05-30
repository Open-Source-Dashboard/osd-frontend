import React, { useContext, useState } from "react";
import { UserContext } from "../api_calls/UserContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/dozen-donuts.png";
import FetchContributions from "./FetchContributions";
import { useAuth } from "../auth/AuthContext";

const MyCommits = () => {
  const { user } = useAuth();
  // TODO: Decide how to handle when the github username doesnt load
  const username = user?.github_username || "default-username";
  const { opensource_commit_count } = useContext(UserContext);
  const totalCommits = opensource_commit_count || 0;
  const donutBoxes = Math.floor(totalCommits / 6);

  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="row-1-card">
      <h2 className="mt-0 mb-2 text-xl font-bold">My Opensource Commits</h2>
      <div className="flex flex-col card-content">
        <div className="flex items-center justify-between p-2">
          <div className="p-2 mr-1 bg-white bg-opacity-100 border-gray-300 rounded-lg">
            <h3 className="pl-2 text-lg font-bold text-center text-orange-600">
              Total Commits
            </h3>
            <img
              src={octocatHoldingDonut}
              alt="Octocat holding donut"
              className="mx-auto w-28 h-28"
            />
            <p className="m-3 text-3xl font-bold text-center text-gray-800">
              {totalCommits}
            </p>

            {loading && <p>Loading contributions...</p>}
            {error && <p>{error}</p>}
            <p className="px-1 text-xs text-center text-gray-800">
              Since joining on _____{" "}
            </p>
          </div>

          <div className="p-2 mr-1 bg-white border-gray-300 rounded-lg">
            <h3 className="text-lg font-bold text-center text-orange-600">
              My Donut Boxes
            </h3>
            <img
              src={donutBoxFull}
              alt="Donut box full"
              className="mx-auto w-28 h-28"
            />
            <p className="p-3 text-3xl font-bold text-center text-gray-800">
              {donutBoxes}
            </p>
            <p className="mt-1 mb-3 text-xs italic text-center text-gray-800">
              Earn 12 donuts to add a donut box!{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 ml-20 mr-20 text-l">
          <a
            href={`https://github.com/${username}#js-contribution-activity`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-2 mt-4 text-center text-white bg-teal-500 rounded shadow-md text-l"
          >
            My Github Profile
          </a>
        </div>
      </div>

  );
};

export default MyCommits;
