import { useState, useEffect } from 'react';
import axios from 'axios';

const RepoApiData = () => {
  const [repoData, setRepoData] = useState([]);
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const response = await axios.get(`${API_SERVER_URL}/repos`);
        console.log('response:', response);
        const { popular_repos_result, featured_repo_result, latest_contributors_result, repositories } = response.data;
        setRepoData(repositories); 
      } catch (error) {
        console.error('Error getting repo data:', error);
      }
    };

    getRepoData();
  }, [API_SERVER_URL]);
}

export default RepoApiData;