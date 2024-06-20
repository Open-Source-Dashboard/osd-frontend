import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);

  return (
    <div className="h-full overflow-scroll">
      <h2 className="mt-0 mb-2 text-lg font-bold text-left">
        Featured Opensource Project
      </h2>
      <div className="rounded-md bg-gray-md">
        {featuredRepo.length > 0 ? (
          featuredRepo.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col items-center text-xs text-center"
            >
              <div className="flex flex-row items-center justify-center">
              <a href={repo.html_url} className="bg-gray-md m-0 p-0">

              {repo.owner && repo.owner.avatar_url ? (
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.name}
                  className="w-20 h-20 m-2 rounded-lg"
                />
              ) : (
                <img
                  src={backupDonutImage}
                  alt={repo.name}
                  className="w-40 h-40 m-2 rounded-lg"
                />
              )}
              </a>

              <div className="flex flex-col">
                <h1 className="text-m">
                  <a href={repo.html_url} className="bg-gray-md">{repo.name}</a>
                </h1>
                <p className="text-sm text-white m-2 text-left">⭐ {repo.stargazers_count}</p>
              </div>
              </div>

              <p className="text-white mt-2">{repo.description}</p>
              <p className="mt-2 text-purple">
                {repo.topics.map((topic, index) => (
                  <span key={topic} className="bg-purple rounded-md text-white mr-1 pl-1 pr-1">
                    {topic}
                    {index !== repo.topics.length - 1 && " "}
                  </span>
                ))}
              </p>
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
