import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authAPI = process.env.AUTH_API_URL;

  const [userToken, setUserToken] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    // if (code) {
    //   // Send the code to the backend to exchange it for an access token
    //   axios
    //     .post('/api/auth/github/callback/', { code })
    //     .then((response) => {
    //       // Save the token in local storage
    //       localStorage.setItem('github_token', response.data.token);
    //       navigate('/'); // Redirect to a different page
    //     })
    //     .catch((error) => {
    //       console.error('Error exchanging code for token:', error);
    //     });
    // }

    if (code) {
      const userToken = getGithubToken(code);
      setUserToken(userToken);
    }

  }, [location]);

  async function getGithubToken(userCode) {
    try {
      const userTokenResponse = await axios.post(authAPI, { code: userCode });
      const userToken = userTokenResponse.data.token;
      return userToken;
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  }

  return (
    <>
      {userToken.token ? (
        <div>
          <h1>Logged in!</h1>
          <p>{JSON.stringify(userToken.token)}</p>
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
