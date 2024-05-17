import React, { useContext, useState } from "react";
import { UserContext } from "../api_calls/UserContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/donut-box-full.png";
import FetchContributions from "./FetchContributions";

const MyCommits = () => {
  const { opensource_commit_count } = useContext(UserContext);
  const totalCommits = opensource_commit_count || 0;
  const donutBoxes = Math.floor(totalCommits / 6);

  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="row-1-card">
      <h2 className="mb-4 text-2xl font-bold">My Opensource Commits</h2>
      <div className="flex flex-col card-content">
        <div className="flex items-center justify-between p-2">
          <div className="border-gray-300 bg-white bg-opacity-50 rounded-lg p-2 mr-2">
            <h3 className="text-lg font-bold pl-2 text-center">Total Commits</h3>
            <img src={octocatHoldingDonut} alt="Octocat holding donut" />
            <p className="text-3xl font-bold text-center m-4">{totalCommits}</p>
            {loading && <p>Loading contributions...</p>}
            {error && <p>{error}</p>}
            <p className="mt-3 text-xs italic text-center text-gray-800 mb-4">
              Since joining on _____{" "}
            </p>
          </div>
          <div className="border-gray-300 bg-white bg-opacity-50 rounded-lg p-2">
            <h3 className="text-lg font-bold text-center">My Donut Boxes</h3>
            <img src={donutBoxFull} alt="Donut box full" />
            <p className="text-3xl font-bold text-center p-4">{donutBoxes}</p>
            <p className="mt-3 text-xs italic text-center text-gray-800 ">
              Earn 6 donuts to get a donut box!{" "}
            </p>
          </div>
        </div>

        <div className="text-l flex items-center justify-between p-4 mb-4 ml-32 mr-32">
        <a
          href="https://github.com/tammytdo#js-contribution-activity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl w-full p-2 mt-4 text-center text-white rounded bg-teal-500 shadow-md"
        >
          My Github Profile
        </a>
        </div>

      </div>
    </div>
  );
};

export default MyCommits;
