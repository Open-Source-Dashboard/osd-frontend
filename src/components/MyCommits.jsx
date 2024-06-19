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
  
  const dateJoined = user.user_model_data['date_joined'] 
  const date = new Date(dateJoined);

  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const formattedDate = `${month} ${year}`;


  return (
    <div className="mt-0 ">
      <div className="flex items-center justify-between p-2 mt-0 rounded-lg">
        <div className="w-48 pb-2 mt-0 mr-2 bg-cream rounded-lg h-54">
          <h3 className="mb-0 text-lg font-bold text-center text-black">{totalCommits} Opensource Commits</h3>
          <img src={octocatHoldingDonut} alt="Octocat holding donut" className="w-20 h-20 mx-auto mt-1" />
          {loading && <p>Loading contributions...</p>}
          {error && <p>{error}</p>}
          <p className="px-1 text-xs text-center text-gray">
            Since joining on {formattedDate}
          </p>
        </div>

        <div className="w-48 bg-cream rounded-lg h-54">
          <h3 className="mt-2 mb-0 text-lg font-bold text-center text-black">{donutBoxes} Donut Boxes</h3>
          <img src={donutBoxFull} alt="Donut box full" className="w-20 h-20 mx-auto mt-2" />
          <p className="px-2 mt-1 mb-2 text-xs text-center text-gray">
            Earn 12 donuts to add a donut box.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCommits;
