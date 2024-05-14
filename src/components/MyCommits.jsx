import React from "react";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/donut-box-full.png";

const MyCommits = () => {
  const totalCommits = 38; //TODO: fetch total commits from API
  const donutBoxes = Math.floor(totalCommits / 6);
  
    return (
      <div className="row-1-card">
        <h2 className="mb-4 text-xl font-bold">My Opensource Project Commits</h2>
        <div className="flex flex-col card-content">
          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-lg font-bold">Total Commits</h3>
              <img src={octocatHoldingDonut} alt="Octocat holding donut" />
              <p className="text-2xl font-bold text-center">{totalCommits}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">My Donut Boxes</h3>
              <img src={donutBoxFull} alt="Donut box full" />
              <p className="text-2xl font-bold text-center">{donutBoxes}</p>
            </div>
          </div>
          <button className="w-full p-2 mt-4">
            My Latest Commits
          </button>
        </div>
      </div>
    );
  };
  
  export default MyCommits;
  