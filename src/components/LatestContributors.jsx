import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);

  return (
    <div className="p-2 pt-0 mt-0 overflow-scroll text-white">
      <h2 className="font-bold text-md">Latest Opensource Project Contributors</h2>
      {latestContributors.length > 0 && (
        latestContributors.map((contributor, idx) => (
          <div key={`contributor-${idx}`}>
            {contributor.author && contributor.repo_name && (
              <p className="p-1 m-2 text-sm text-white border border-white rounded-md">
                {`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default LatestContributors;
