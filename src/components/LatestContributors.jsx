import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from '../assets/donut-icons/color/1.png';

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);
  console.log('latestContributors', latestContributors)

  return (
    <div className="p-6 row-1-card">
      <h2 className="mb-4 text-xl font-bold mt-0">Latest Opensource Project Contributors</h2>
      {Object.keys(latestContributors).length > 0 && (
        latestContributors.map((contributor, idx) => (
          <div key={`contributor-${idx}`} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "8px", marginBottom: "8px" }}>
            {contributor.author && contributor.repo_name && (
              <p>{`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default LatestContributors;
