import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);

  return (
    <div className="w-full h-full overflow-auto">
      <h2 className="mt-0 mb-2 text-lg font-bold text-left">
        Featured Opensource Project
      </h2>
      <div className="w-full h-full rounded-md bg-gray-md">
        {featuredRepo.length > 0 ? (
          featuredRepo.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col items-center text-xs text-center"
            >
              <div className="flex flex-row items-center justify-center">
              <a href={repo.html_url} className="p-0 m-0 bg-gray-md" target="_blank" rel="noopener noreferrer">

              {repo.owner && repo.owner.avatar_url ? (
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.name}
                  className="w-20 h-20 m-2 rounded-lg "
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
                <h1 className="mt-3 text-m">
                  <a href={repo.html_url} className="text-sm bg-gray">{repo.name}</a>
                </h1>
                <p className="pt-2 m-2 text-sm text-left text-white">⭐ {repo.stargazers_count}</p>
              </div>
              </div>

              <p className="mt-2 text-white">{repo.description}</p>
              <p className="p-1 mt-2 text-purple">
                {repo.topics.map((topic, index) => (
                  <span key={topic} className="pl-1 pr-1 mr-1 text-white rounded-md bg-purple">
                    {topic}
                    {index !== repo.topics.length - 1 && " "}
                  </span>
                ))}
              </p>
            </div>
          ))
        ) : (
          <p className="w-full h-full rounded-lg bg-blue">
            Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProject;
