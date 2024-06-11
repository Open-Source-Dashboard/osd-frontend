import React, { useState, useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from '../assets/donut-icons/color/donut-purple.png';

const PeruseProjects = () => {
  const { popularRepos } = useContext(RepoContext);
  const reposPerPage = 3;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const indexOfLastRepo = (currentPage + 1) * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = popularRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  
  return (
    <div className="h-full shadow-gray-500/50 bg-violet-950">
      <h2 className="mt-0 mb-2 text-xl font-bold">Peruse Projects</h2>

      {popularRepos.length > 0 ? (
        <div className="relative">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {currentRepos.map((repo) => (
              <li key={repo.id} className='card-content-li'>
                <div className="flex justify-center">
                  {repo.owner && repo.owner.avatar_url ? ( 
                    <img
                      src={repo.owner.avatar_url}
                      alt={repo.name}
                      className="w-20 h-20 rounded-lg "
                    />
                  ) : (
                    <img
                      src={backupDonutImage} 
                      alt={repo.name}
                      className="w-20 h-20 rounded-lg"
                    />
                  )}
                </div>
                <h2>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-blue-600"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="text-sm text-gray-600">⭐ {repo.stargazers_count}</p>
                <p className="p-1 text-xs text-purple-600 mb3-2">{repo.description}</p>
                <p className="text-xs text-gray-600">
                  Topics:{" "}
                  {repo.topics.map((topic, index) => (
                    <span key={topic}>
                      {topic}
                      {index !== repo.topics.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <button
            onClick={handlePrevPage}
            className={`carousel-button absolute left-0 top-1/4`}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className={`carousel-button absolute right-0 top-1/4`}
            disabled={indexOfLastRepo >= popularRepos.length}
          >
            Next
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PeruseProjects;
