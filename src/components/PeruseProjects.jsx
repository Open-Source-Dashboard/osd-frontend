import React, { useState, useContext, useEffect } from "react";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";

const PeruseProjects = () => {
  const { popularRepos } = useContext(RepoContext);

  // Change repos per page based on screen size
  const [reposPerPage, setReposPerPage] = useState();

  useEffect(() => {
    const updateReposPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setReposPerPage(3); // lg
      } else if (screenWidth >= 640) {
        setReposPerPage(2); // md 
      } else {
        setReposPerPage(1); // sm
      }
    };

    window.addEventListener('resize', updateReposPerPage);

    updateReposPerPage();

    return () => window.removeEventListener('resize', updateReposPerPage);
  }, []);

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
    <div className="h-full overflow-auto shadow-gray-500/50 bg-gray">
      <h2 className="mt-0 mb-2 text-lg font-bold">Peruse Opensource Projects</h2>
      
      {popularRepos.length > 0 ? (
        <div className="relative h-full rounded-lg">
          <ul className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentRepos.map((repo) => (
              <li key={repo.id} className="h-full p-2 rounded-lg shadow-md bg-gray-md">
                <div className="flex flex-row justify-center">
                <div className="flex justify-center">
                <a href={repo.html_url} className="p-0 bg-gray-md" target="_blank" rel="noopener noreferrer">
                    {repo.owner && repo.owner.avatar_url ? (
                      <img
                        src={repo.owner.avatar_url}
                        alt={repo.name}
                        className="w-16 h-16 rounded-lg "
                      />
                    ) : (
                      <img
                        src={backupDonutImage}
                        alt={repo.name}
                        className="w-16 h-16 rounded-lg"
                      />
                    )}
                  </a>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h2 className="mx-4 mt-2 mb-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold "
                    >
                      {repo.name}
                    </a>
                  </h2>
                  <p className="pt-1 text-sm text-white">⭐ {repo.stargazers_count}</p>
                </div>
                </div>

                <p className="py-2 text-xs text-white mb3-2">{repo.description}</p>
                <p className="text-xs text-light-pink">
                  {repo.topics.map((topic, index) => (
                    <span
                      key={topic}
                      className="pl-1 pr-1 mr-1 text-white rounded-md bg-purple"
                    >
                      {topic}
                      {index !== repo.topics.length - 1 && " "}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
            <button
              onClick={handlePrevPage}
              className={` text-xs absolute left-0 top-1/4 bg-green p-1 m-2 transform -translate-y-1/2 rounded-md top-1/2;}`}
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className={` text-xs absolute right-0 top-1/4 bg-green p-1 m-2 transform -translate-y-1/2 rounded-md top-1/2;}`}
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