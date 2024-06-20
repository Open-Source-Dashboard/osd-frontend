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
        <div className="flex flex-col items-center justify-between w-48 rounded-lg border border-gray-light ml-1 mr-1">
          <div className="flex flex-col items-center justify-between h-full">
            <h3 className="mt-2 mb-0 text-md font-bold text-center text-white">
              {donutBoxes} Donut {boxOrBoxes}
            </h3>
            <img
              src={donutBoxFull}
              alt="Donut box full"
              className="w-20 h-20 mx-auto mt-2"
            />
            <p className="px-2 mt-1 mb-2 text-xs text-center text-white">
              Earn 12 donuts to add a donut box
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-48 rounded-lg border border-gray-light ml-1 mr-1">
          <div className="flex flex-col items-center justify-around h-full">
            <h3 className="mb-0 text-md font-bold text-center text-white">
              {totalCommits} Opensource Commits
            </h3>
            <div className="flex items-start justify-center w-full">
              <img
                src={octocatHoldingDonut}
                alt="Octocat holding donut"
                className="w-20 h-20 mx-auto mt-1"
              />
            </div>
            <p className="text-xs">Since joining</p>
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
