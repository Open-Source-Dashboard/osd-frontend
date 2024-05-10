import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const PeruseProjects = () => {
  const { repositoryData } = useContext(RepoContext);
  const getThreeRepos = repositoryData.slice(0, 3);


  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-2/3">
      <h2 className="mb-4 text-xl font-bold">Peruse Projects</h2>

      {repositoryData.length > 0 ? (
         <ul className="grid grid-cols-1 gap-4">
         {getThreeRepos.map((repo) => (
            <li key={repo.id} className="border border-gray-300 bg-gray-100 p-4 rounded-lg shadow-md">
            <h2>
               <a href={repo.url} target="_blank" rel="noreferrer">
                 {repo.name}
               </a>
             </h2>
             <p>Description: {repo.description}</p>
             <p>⭐ {repo.stargazers_count}</p>
             <p>Topics: {repo.topics.map((topic, index) => (
               <span key={topic}>
                 {topic}
                 {index !== repo.topics.length - 1 && ', '}
               </span>
             ))}
             </p>
           </li>
         ))}
       </ul>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default PeruseProjects;
