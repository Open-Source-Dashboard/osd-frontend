import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);

  return (
    <div className="mt-4 border border-gray-md rounded-md">
      <h2 className="mt-0 mb-0 rounded-t-md text-center text-md font-bold text-left bg-purple">
        Featured Opensource Project
      </h2>
      <div className="bg-gray rounded-b-md">
        {featuredRepo.length > 0 ? (
          featuredRepo.map((repo) => (
            <div key={repo.id} className="flex flex-col bg-gray rounded-md">
              <div className="flex items-center text-xs ml-2 mt-1">
                {repo.owner && repo.owner.avatar_url ? (
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.name}
                    className="w-28 h-28 m-2 rounded-lg"
                  />
                ) : (
                  <img
                    src={backupDonutImage}
                    alt={repo.name}
                    className="w-24 h-24 m-2 rounded-lg"
                  />
                )}
                <div className="flex flex-col ml-3">
                  <h1 className="text-sm mb-2">
                    <a href={repo.html_url} className="hover:underline">
                      {repo.name}
                    </a>
                  </h1>
                  <p className="text-sm text-white mt-2">
                    ⭐ {repo.stargazers_count}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-xs p-2 ml-2">
                <p className="text-white mb-2">{repo.description}</p>
                <p className="text-gray-500">
                  Topics:{" "}
                  {repo.topics.map((topic, index) => (
                    <span key={topic}>
                      {topic}
                      {index !== repo.topics.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProject;
