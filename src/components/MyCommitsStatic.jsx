import React from "react";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/donut-box-full.png";

const MyCommitsStatic = () => {
  const totalCommits = 20;
  const donutBoxes = 3;

  return (
    <div className="row-1-card">
      <h2 className="mt-0 mb-2 text-xl font-bold">My Opensource Commits</h2>
      <div className="flex flex-col card-content">
        <div className="flex items-center justify-between p-2">
          <div className="p-2 mr-1 bg-white bg-opacity-50 border-gray-300 rounded-lg">
            <h3 className="pl-2 text-lg font-bold text-center">Total Commits</h3>
            <img src={octocatHoldingDonut} alt="Octocat holding donut" className="mx-auto w-28 h-28" />
            <p className="m-3 text-3xl font-bold text-center">{totalCommits}</p>
            <p className="mt-3 mb-3 ml-6 mr-6 text-xs italic text-center text-gray-800">
            Total Commits
            </p>
          </div>
          <div className="p-2 bg-white bg-opacity-50 border-gray-300 rounded-lg">
            <h3 className="text-lg font-bold text-center">My Donut Boxes</h3>
            <img src={donutBoxFull} alt="Donut box full" className="mx-auto w-28 h-28" />
            <p className="p-3 text-3xl font-bold text-center">{donutBoxes}</p>
            <p className="mt-1 mb-3 text-xs italic text-center text-gray-800 ">
              Earn 6 donuts to add a donut box!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 ml-20 mr-20 text-l">
          <a
            href="https://github.com"  
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-2 mt-4 text-center text-white bg-teal-500 rounded shadow-md text-l"
          >
            My Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCommitsStatic;
