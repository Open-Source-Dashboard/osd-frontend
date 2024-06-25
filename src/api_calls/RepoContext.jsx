import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [featuredRepo, setFeaturedRepo] = useState([]);
  const [latestContributors, setLatestContributors] = useState([]);
  const [popularRepos, setPopularRepos] = useState([]);

  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const getRepoData = async () => {
      const response = await axios.get(`${API_SERVER_URL}/repos`);
      console.log("url", `${API_SERVER_URL}/repos`);
      try {
        // const response = await axios.get(`${API_SERVER_URL}/repos`);
        const {
          featured_repo_result,
          latest_contributors_result,
          popular_repos_result,
        } = response.data;

        setFeaturedRepo(featured_repo_result);
        setLatestContributors(latest_contributors_result);
        setPopularRepos(popular_repos_result);
      } catch (error) {
        console.error("Error getting repo data:", error);
      }
    };

    getRepoData();
  }, [API_SERVER_URL]);

  return (
    <RepoContext.Provider value={{ popularRepos, featuredRepo, latestContributors }}>
      {children}
    </RepoContext.Provider>
  );
};

export default RepoContext;
