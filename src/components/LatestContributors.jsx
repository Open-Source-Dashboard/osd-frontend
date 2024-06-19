import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);

  return (
    <div className="pl-2 mb-1 text-white rounded-md bg-purple">
      <h2 className="font-bold text-md rounded-t-md mt-0 mb-0">
        Latest Opensource Project Contributors
      </h2>
      {latestContributors.length > 0 &&
        latestContributors.slice(0,5).map((contributor, idx) => (
          <div
            key={`contributor-${idx}`}
          >
            {contributor.author && contributor.repo_name && (
              <p className="m-1 p-1 text-sm text-white text-center border border-white rounded-md">
                {`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default LatestContributors;
