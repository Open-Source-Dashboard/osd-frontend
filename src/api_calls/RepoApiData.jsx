import { useState } from 'react';
import axios from 'axios';

const RepoApiData = () => {
  const [repoData, setRepoData] = useState({});
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  const getRepoData = async () => {
    try {
      const response = await axios.get(`${API_SERVER_URL}/osd/repos/`);
      console.log('response:', response);
      const repoData = response.data;
      setRepoData(repoData);
    } catch (error) {
      console.error('Error getting repo data:', error);
    }
  };

  return (
    <>API Data will eventually show here</>
    // <>
    //   <div>
    //     {repoData.length > 0 ? (
    //       <ul>
    //         {repoData.map((repo) => (
    //           <li key={repo.id}>{repo.name}</li>
    //         ))}
    //       </ul>
    //     ) : (
    //       <p>No repo data</p>
    //     )}
    //   </div>
    // </>
  );
}

export default RepoApiData;