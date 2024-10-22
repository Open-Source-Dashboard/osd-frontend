import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);

  return (
    <div className="p-2 pt-0 overflow-auto rounded-lg bg-gray">
      <h2 className="text-lg font-bold">Latest Opensource Contributors</h2>
      {latestContributors.length > 0 ? (
        latestContributors.slice(0,5).map((contributor, idx) => (
          <div key={`contributor-${idx}`}>
            {contributor.author && contributor.repo_name && (
              <p className="p-1 m-2 text-sm text-white border border-white rounded-md">
                {`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LatestContributors;
