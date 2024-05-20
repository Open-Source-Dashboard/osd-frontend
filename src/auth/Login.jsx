import { useEffect, useState, useLocation, useNavigate } from 'react';
import axios from 'axios';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authAPI = process.env.REACT_APP_AUTH_API_URL;

  const [userToken, setUserToken] = useState({});

  useEffect(() => {
    getUserToken();
  }, []);

  async function getUserToken() {
    const searchParams = new URLSearchParams(location.search);
    const userCode = searchParams.get('code');

    try {
      const userTokenResponse = await axios.get(`${authAPI}?code=${userCode}`);
      const userTokenStatus = userTokenResponse.status;
      const userToken = userTokenResponse.data;

      if (userTokenStatus === 200) {
        setUserToken(userToken);
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  }

  return (
    <>
      {userToken.github_username ? (
        <div>
          <h1>Logged in!</h1>
          <p>Github Username: {JSON.stringify(userToken.github_username)}</p>
        </div>
      ) : (
        <div>
          <h1>Not logged in!</h1>
        </div>
      )}
    </>
  );
};

export default Login;
