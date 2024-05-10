import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [repoData, setRepoData] = useState([]);
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const response = await axios.get(`${API_SERVER_URL}/osd/repos/`);
        const { repositories } = response.data;
        setRepoData(repositories); 
      } catch (error) {
        console.error('Error getting repo data:', error);
      }
    };

    getRepoData();
  }, [API_SERVER_URL]);

  return (
    <RepoContext.Provider value={{ repoData }}>
      {children}
    </RepoContext.Provider>
  );
};

export default RepoContext