import React, { useContext } from "react";
import { RepoContext } from "../api_calls/RepoContext";

const PeruseProjects = () => {
  const { repoData } = useContext(RepoContext);
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Peruse Projects</h2>
        <p>Here Are Some Projects You Might Like</p>

          {repoData.length > 0 ? (
            <ul>
              {repoData.map((repo) => (
                <li key={repo.id} className="text-sm">
                  <a href={repo.url} target="_blank" rel="noreferrer">{repo.name}</a>
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
  