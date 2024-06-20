import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/dozen-donuts-box.png";

const MyCommits = () => {
  const { user } = useAuth();
  const totalCommits = user?.user_model_data?.opensource_commit_count || 0;
  const donutBoxes = Math.floor(totalCommits / 12);
  const boxOrBoxes = donutBoxes === 1 ? "box" : "boxes"; // Determine singular or plural

  const [loading] = useState(false);
  const [error] = useState(null);

  return (
    <div className="mt-0">
      <div className="flex items-stretch justify-around mt-0 mb-0 rounded-lg">
        <div className="flex flex-col items-center justify-between w-48 rounded-lg border border-gray-light ml-1 mr-3">
          <div className="flex flex-col items-center justify-between h-full">
            <h3 className="mt-1 mb-0 text-md font-bold text-center text-white">
              Donut {boxOrBoxes}
            </h3>
            <div className="flex justify-center items-center w-full">
              <p className="text-6xl px-2">{donutBoxes}</p>
              <img
                src={donutBoxFull}
                alt="Donut box full"
                className="w-20 h-20 mx-2 mt-2"
              />
            </div>
            <p className="px-2 mt-1 mb-2 text-xs text-center text-white">
              Earn 12 donuts to add a donut box
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-48 rounded-lg border border-gray-light ml-1 mr-1">
          <div className="flex flex-col items-center justify-around h-full">
            <h3 className="mb-0 text-md font-bold text-center text-white">
              Opensource Commits
            </h3>
            <div className="flex justify-center items-center w-full">
              <p className="text-6xl px-1">{totalCommits}</p>
              <img
                src={octocatHoldingDonut}
                alt="Octocat holding donut"
                className="w-20 h-20 mx-0 mt-2"
              />
            </div>

            <p className="text-xs">Since joining DD</p>
            <div className="flex items-start justify-center w-full">
              {loading && <p>Loading contributions...</p>}
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommits;
