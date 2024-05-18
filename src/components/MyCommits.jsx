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
    <div className="row-1-card shadow-gray-500/50">
      <h2 className="mb-2 text-xl font-bold mt-0">My Opensource Commits</h2>
      <div className="flex flex-col card-content">
        <div className="flex items-center justify-between p-2">
        <div className="border-gray-300 bg-white bg-opacity-100 rounded-lg p-2 mr-1">
            <h3 className="text-orange-600 text-lg font-bold pl-2 text-center">Total Commits</h3>
            <img src={octocatHoldingDonut} alt="Octocat holding donut" className="w-28 h-28 mx-auto" />
            <p className="text-gray-800 text-3xl font-bold text-center m-3">{totalCommits}</p>
            {loading && <p>Loading contributions...</p>}
            {error && <p>{error}</p>}
            <p className="mt-3 text-xs italic text-center text-gray-800 mb-3 ml-6 mr-6">
              Since joining on _____{" "}
            </p>
          </div>
          <div className="border-gray-300 bg-white bg-opacity-100 rounded-lg p-2 mr-1">
            <h3 className="text-orange-600 text-lg font-bold text-center">My Donut Boxes</h3>
            <img src={donutBoxFull} alt="Donut box full" className="w-28 h-28 mx-auto" />
            <p className="text-gray-800 text-3xl font-bold text-center p-3">{donutBoxes}</p>
            <p className="mt-3 text-xs italic text-center text-gray-800">
              Earn 6 donuts to add a donut box!{" "}
            </p>
          </div>
        </div>

        <div className="text-l flex items-center justify-between p-4 ml-20 mr-20">
          <a
            href="https://github.com/tammytdo#js-contribution-activity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-l w-full p-2 mt-4 text-center text-white rounded bg-teal-500 shadow-md"
          >
            My Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCommits;
