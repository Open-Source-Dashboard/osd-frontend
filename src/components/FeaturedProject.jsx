import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);

  return (
    <div className="h-full  ">
      <h2 className="mt-0 mb-2 text-xl font-bold text-left">
        Featured Project
      </h2>
      <div className="rounded-md bg-gray-md">
        {featuredRepo.length > 0 ? (
          featuredRepo.map((repo) => (
            <div
              key={repo.id}
              className="items-center text-xs"
            >

              <div className="flex flex-row">
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

              <div className="flex flex-col m-1">
                <h1>
                  <a href={repo.html_url}>{repo.name}</a>
                </h1>
                <p className="text-sm text-white ml-1 mt-4">⭐ {repo.stargazers_count}</p>
              </div>
              </div>

              <div className="flex flex-col m-2">
              <p className="text-white">{repo.description}</p>
              <p className="mt-1">
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
