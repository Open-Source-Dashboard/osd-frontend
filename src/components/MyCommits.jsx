import React, { useContext, useState } from "react";
import { UserContext } from "../api_calls/UserContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/dozen-donuts.png";
import FetchContributions from "./FetchContributions";

const MyCommits = () => {
  // Store the opensource_commit_count var on the original axios call so that the call is made only once
  // const { opensource_commit_count } = useContext(UserContext);
  // const totalCommits = opensource_commit_count || 0; // Comment in for live variable
  const totalCommits = 0; // Use for testing
  const donutBoxes = Math.floor(totalCommits / 6);

  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
   
      <div className="mt-0 card-content">
        <div className="flex items-center justify-between p-2 mt-0">
          
        <div className="w-48 pb-2 mt-0 mr-2 bg-white rounded-lg h-54">
        <h3 className="mb-0 text-lg font-bold text-center text-gray-800">Opensource Commits</h3>
            <img src={octocatHoldingDonut} alt="Octocat holding donut" className="w-20 h-20 mx-auto mt-1" />
            <p className="m-1 text-2xl font-bold text-center text-gray-800 ">{totalCommits}</p>
            {loading && <p>Loading contributions...</p>}
            {error && <p>{error}</p>}
            <p className="px-1 text-xs text-center text-gray-800">
              Since joining on _____{" "}
            </p>
          </div>

          <div className="w-48 bg-white rounded-lg h-54">
          <h3 className="mt-2 mb-0 text-lg font-bold text-center text-gray-800">My Donut Boxes</h3>
            <img src={donutBoxFull} alt="Donut box full" className="w-20 h-20 mx-auto mt-2" />
            <p className="px-1 m-1 text-2xl font-bold text-center text-gray-800">{donutBoxes}</p>
            <p className="px-2 mt-1 mb-2 text-xs text-center text-gray-800">
              Earn 12 donuts to add a donut box.{" "}
            </p>
          </div>
        </div>
      </div>

  );
};

export default MyCommits;