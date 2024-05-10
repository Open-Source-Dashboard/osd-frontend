import React, { useState, useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const PeruseProjects = () => {
  const { repositoryData } = useContext(RepoContext);
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
  const currentRepos = repositoryData.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <div className="w-2/3 p-6 mx-auto rounded-lg shadow-lg bg-violet-950">
      <h2 className="mb-4 text-xl font-bold">Peruse Projects</h2>

      {repositoryData.length > 0 ? (
        <div className="relative">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {currentRepos.map((repo) => (
              <li
                key={repo.id}
                className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md"
              >
                <h2>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-purple-950"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="mb-2 text-sm text-gray-600">
                  Description: {repo.description}
                </p>
                <p className="text-sm text-gray-600">
                  ⭐ {repo.stargazers_count}
                </p>
                <p className="text-sm text-gray-600">
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
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full m-2`}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full m-2`}
            disabled={indexOfLastRepo >= repositoryData.length}
          >
            Next
          </button>
        </div>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default PeruseProjects;
