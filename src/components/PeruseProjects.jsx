import React, { useState, useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from '../assets/donut-icons/color/1.png';

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
    <div className="p-6 bg-white rounded-lg shadow-md w-2/3 mx-auto">
      <h2 className="mb-4 text-xl font-bold">Peruse Projects</h2>

      {popularRepos.length > 0 ? (
        <div className="relative">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentRepos.map((repo) => (

  <li
    key={repo.id}
    className="border border-gray-300 bg-gray-100 p-4 rounded-lg shadow-md"
  >
    {repo.owner && repo.owner.avatar_url ? ( 
      <img
        src={repo.owner.avatar_url}
        alt={repo.name}
        style={{ width: "60px", height: "60px" }}
      />
    ) : 
    // Render a donut image is avatar_url not defined
    (
      <img
        src={backupDonutImage} 
        alt={repo.name}
        style={{ width: "60px", height: "60px" }}
      />
    )}

    <h2>
      <a
        href={repo.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 font-bold"
      >
        {repo.name}
      </a>
    </h2>
    <p className="text-sm text-gray-600">
      ⭐ {repo.stargazers_count}
    </p>
    <p className="text-sm text-black-600 mb-2">{repo.description}</p>
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
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full m-2`}
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
