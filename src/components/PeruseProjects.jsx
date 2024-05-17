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
  
  console.log('popularRepos', popularRepos)

  return (
    <div className="row-2-card bg-violet-950">
      <h2 className="mb-4 text-xl font-bold mt-0">Peruse Projects</h2>

      {popularRepos.length > 0 ? (
        <div className="relative">

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {currentRepos.map((repo) => (

  <li
    key={repo.id}
    className='card-content-li'
  >
    {repo.owner && repo.owner.avatar_url ? ( 
      <img
        src={repo.owner.avatar_url}
        alt={repo.name}
        className="rounded-lg h-25 w-25"
      />
    ) : 
    // Render a donut image if avatar_url not defined
    (
      <img
        src={backupDonutImage} 
        alt={repo.name}
        className="rounded-lg w-25 h-25"
      />
    )}

    <h2>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="font-bold text-blue-600"
      >
        {repo.name}
      </a>
    </h2>
    <p className="text-sm text-gray-600">
      ⭐ {repo.stargazers_count}
    </p>
    <p className="p-1 text-sm text-purple-600 mb3-2">{repo.description}</p>
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
            className={`carousel-button absolute left-0 top-1/2 transform -translate-y-1/2`}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className={`carousel-button absolute right-0 top-1/2 transform -translate-y-1/2`}
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
