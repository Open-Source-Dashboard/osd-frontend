import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);

  return (
    <div className="p-2 overflow-scroll">
      <h2 className="font-bold text-md">Latest Opensource Project Contributors</h2>
      {Object.keys(latestContributors).length > 0 && (
        latestContributors.map((contributor, idx) => (
          <div key={`contributor-${idx}`}>
            {contributor.author && contributor.repo_name && (
              <p className="p-1 m-2 text-sm border border-white rounded-md">{`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default LatestContributors;
