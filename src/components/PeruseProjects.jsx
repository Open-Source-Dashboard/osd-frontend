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
    <div className="w-2/3 row-2-card">
      <h2>Peruse Projects</h2>

      {popularRepos.length > 0 ? (
        <div className="relative">

          <ul className="card-content">
          {currentRepos.map((repo) => (

  <li
    key={repo.id}
    className="card-content-li"
  >
    {repo.owner && repo.owner.avatar_url ? ( 
      <img
        src={repo.owner.avatar_url}
        alt={repo.name}
        style={{ width: "60px", height: "60px" }}
      />
    ) : 
    // Render a donut image if avatar_url not defined
    (
      <img
        src={backupDonutImage} 
        alt={repo.name}
        style={{ width: "60px", height: "60px" }}
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
    <p className="mb-2 text-sm text-black-600">{repo.description}</p>
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
