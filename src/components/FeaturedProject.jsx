import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from '../assets/donut-icons/color/4.png';

const FeaturedProject = () => {
  const { featuredRepo } = useContext(RepoContext);
  
  return (
    <div className="shadow-gray-500/50 w-2/3 row-2-card">
      <h2 className="mb-4 text-xl font-bold text-left mt-0">Featured Opensource Project</h2>
        <div className="card-content bg-organge-300">
          {Object.keys(featuredRepo).length > 0? (
            featuredRepo.map((repo) => (
              <div key={repo.id} className="flex flex-col items-center text-center">
        {repo.owner && repo.owner.avatar_url ? (
          <img
            src={repo.owner.avatar_url}
            alt={repo.name}
            className="rounded-lg h-80 w-80"
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
