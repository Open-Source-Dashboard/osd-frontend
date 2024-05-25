import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from '../assets/donut-icons/color/4.png';

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);
  
  return (
    <div className="p-2 border-4 border-white rounded-lg bg-violet-900 ">
      <h2 className="mt-0 mb-4 text-xl font-bold text-left">Featured Opensource Project</h2>
        <div className="card-content bg-organge-300">
          {Object.keys(featuredRepo).length > 0? (
            featuredRepo.map((repo) => (
              <div key={repo.id} className="flex flex-col items-center text-xs text-center">
        {repo.owner && repo.owner.avatar_url ? (
          <img
            src={repo.owner.avatar_url}
            alt={repo.name}
            className="w-40 h-40 rounded-lg"
          />
        ) : (
          <img
            src={backupDonutImage} 
            alt={repo.name}
            className="w-40 h-40 rounded-lg"
          />
        )}
              <h1><a href={repo.html_url}>{repo.name}</a></h1>
              <p className="text-sm text-gray-600">
              ⭐ {repo.stargazers_count}
              </p>
              <p className="text-purple-500">
              {repo.description}</p>
              <p >
                    Topics:{" "}
                    {repo.topics.map((topic, index) => (
                      <span key={topic}>
                        {topic}
                        {index !== repo.topics.length - 1 && ", "}
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
