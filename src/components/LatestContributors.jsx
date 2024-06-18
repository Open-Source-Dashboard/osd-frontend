import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const LatestContributors = () => {
  const { latestContributors } = useContext(RepoContext);

  return (
    <div className="text-white border border-gray-md rounded-md">
      <h2 className="font-bold text-md text-center bg-purple rounded-t-md mt-0 mb-0">
        Latest Opensource Project Contributors
      </h2>
      {latestContributors.length > 0 &&
        latestContributors.slice(0,5).map((contributor, idx) => (
          <div
            key={`contributor-${idx}`}
            className={`bg-gray ${
              idx === latestContributors.length - 1 ? "rounded-b-lg" : ""
            }`}
          >
            {contributor.author && contributor.repo_name && (
              <p className="p-2 text-sm text-white bg-gray text-center">
                {`🎉 ${contributor.author} just contributed to ${contributor.repo_name}`}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

export default LatestContributors;
