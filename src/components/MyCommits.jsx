import React, { useContext, useState } from "react";
import { UserContext } from "../api_calls/UserContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/dozen-donuts.png";
import FetchContributions from "./FetchContributions";

const MyCommits = () => {
  const { opensource_commit_count } = useContext(UserContext);
  const totalCommits = opensource_commit_count || 0;
  const donutBoxes = Math.floor(totalCommits / 6);

  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="h-full p-2 overflow-scroll rounded-lg shadow-md bg-violet-950 shadow-gray-500/50">
      <h2 className="my-0 text-md bold text-">My Opensource Commits</h2>
      <div className="mt-0 card-content">
        <div className="flex items-center justify-between p-2 mt-0">
          
        <div className="w-48 h-48 mt-0 mr-1 bg-white bg-opacity-100 rounded-lg">
            <h3 className="mb-1 text-sm font-bold text-center text-orange-600 ">Total Commits</h3>
            <img src={octocatHoldingDonut} alt="Octocat holding donut" className="w-20 h-20 mx-auto" />
            <p className="text-2xl font-bold text-center text-gray-800 ">{totalCommits}</p>
            {loading && <p>Loading contributions...</p>}
            {error && <p>{error}</p>}
            <p className="mx-6 text-xs italic text-center text-gray-800 m">
              Since joining on _____{" "}
            </p>
          </div>

          <div className="w-48 h-48 bg-white rounded-lg">
            <h3 className="mb-1 text-sm font-bold text-center text-orange-600">My Donut Boxes</h3>
            <img src={donutBoxFull} alt="Donut box full" className="w-20 h-20 mx-auto" />
            <p className="text-2xl font-bold text-center text-gray-800">{donutBoxes}</p>
            <p className="px-1 mt-1 mb-2 text-xs italic text-center text-gray-800">
              Earn 12 donuts to add a donut box!{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 ml-20 mr-20 text-l">
          <a
            href="https://github.com/tammytdo#js-contribution-activity"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 p-2 text-xs text-center text-white bg-teal-500 rounded shadow-md"
          >
            My Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCommits;
