import { useState, useEffect } from 'react';
import axios from 'axios';

const RepoApiData = () => {
  const [repoData, setRepoData] = useState([]);
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const response = await axios.get(`${API_SERVER_URL}/osd/repos/`);
        console.log('response:', response);
        const { popular_repos_result, featured_repo_result, latest_contributors_result, repositories } = response.data;
        setRepoData(repositories); // Assuming 'repositories' contains the array you want to display
      } catch (error) {
        console.error('Error getting repo data:', error);
      }
    };

    getRepoData();
  }, [API_SERVER_URL]); // The empty array means this effect will only run once after the initial render


  return (

    <>
      <div>
        {repoData.length > 0 ? (
            <ul>
                {repoData.map((repo) => (
                <li key={repo.id}>
                    {repo.name}
                </li>
                ))}
            </ul>
        ) : (
          <p>No repo data</p>
        )}
      </div>
    </>
  );
}

export default RepoApiData;