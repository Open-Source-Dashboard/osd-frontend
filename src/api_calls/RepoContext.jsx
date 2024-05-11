import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import sampleRepoResponse from "../sampleData/sampleRepoResponse.json"; // keep for testing
export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
    const [featuredRepo, setFeaturedRepo] = useState([]);
    const [latestContributors, setLatestContributors] = useState([]);
    const [popularRepos, setPopularRepos] = useState([]);
    // const [repositoryData, setRepositoryData] = useState([]);
  
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const getRepoData = async () => {
      try {

        // Comment out while testing to minimize API calls

        // const response = await axios.get(`${API_SERVER_URL}/repos`);
        // const {
        //   featured_repo_result,
        //   latest_contributors_result,
        //   popular_repos_result,
        //   // repositories,
        // } = response.data;

        // Use while testing to minimize API calls
        const {
          featured_repo_result,
          latest_contributors_result,
          popular_repos_result,
          // repositories,
        } = sampleRepoResponse;

        setFeaturedRepo(featured_repo_result);
        setLatestContributors(latest_contributors_result);
        setPopularRepos(popular_repos_result);
        // setRepositoryData(repositories);

        // use for testing to minimize api calls and increase rendering speed.
        // setRepositoryData(sampleRepoResponse)
      } catch (error) {
        console.error("Error getting repo data:", error);
      }
    };

    getRepoData();
  }, [API_SERVER_URL]);


  return (
    <RepoContext.Provider value={{ popularRepos, featuredRepo }}>{children}</RepoContext.Provider>
  );
};

export default RepoContext;
