import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import octocatHoldingDonut from "../assets/octocat-holding-donut.png";
import donutBoxFull from "../assets/dozen-donuts-box.png";

const MyCommits = () => {
  const { user } = useAuth();
  const totalCommits = user?.user_model_data?.opensource_commit_count || 0;
  const donutBoxes = Math.floor(totalCommits / 12);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="mt-0 ">
      <div className="flex items-center justify-between p-2 mt-0 rounded-lg bg-pink">
        <div className="w-48 pb-2 mt-0 mr-2 bg-white rounded-lg h-54">
          <h3 className="mb-0 text-lg font-bold text-center text-blue">Opensource Commits</h3>
          <img src={octocatHoldingDonut} alt="Octocat holding donut" className="w-20 h-20 mx-auto mt-1" />
          <p className="m-1 text-2xl font-bold text-center text-blue">{totalCommits}</p>
          {loading && <p>Loading contributions...</p>}
          {error && <p>{error}</p>}
          <p className="px-1 text-xs text-center text-blue">
            Since joining on _____
          </p>
        </div>

        <div className="w-48 bg-white rounded-lg h-54">
          <h3 className="mt-2 mb-0 text-lg font-bold text-center text-blue">Donut Boxes</h3>
          <img src={donutBoxFull} alt="Donut box full" className="w-20 h-20 mx-auto mt-2" />
          <p className="px-1 m-1 text-2xl font-bold text-center text-blue">{donutBoxes}</p>
          <p className="px-2 mt-1 mb-2 text-xs text-center text-blue">
            Earn 12 donuts to add a donut box.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCommits;
