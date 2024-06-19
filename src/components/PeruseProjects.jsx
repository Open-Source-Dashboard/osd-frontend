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
    <div className="h-full overflow-scroll shadow-gray-500/50 bg-gray">
      <h2 className="mt-0 mb-2 text-xl font-bold">Peruse Projects</h2>

      {popularRepos.length > 0 ? (
        <div className="relative">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {currentRepos.map((repo) => (
              <li key={repo.id} className='p-2 rounded-lg shadow-md bg-gray-md'>
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
                    className="text-sm font-bold "
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="text-sm text-white">⭐ {repo.stargazers_count}</p>
                <p className="py-2 text-xs text-white mb3-2">{repo.description}</p>
                <p className="text-xs text-light-pink">
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
            className={` text-xs absolute left-0 top-1/4 bg-blue p-1 m-2 transform -translate-y-1/2 rounded-md top-1/2;}`}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className={` text-xs absolute right-0 top-1/4 bg-blue p-1 m-2 transform -translate-y-1/2 rounded-md top-1/2;}`}
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
