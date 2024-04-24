import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (code) {
      // Send the code to the backend to exchange it for an access token
      axios
        .post('/api/auth/github/callback/', { code })
        .then((response) => {
          // Save the token in local storage
          localStorage.setItem('github_token', response.data.token);
          navigate('/'); // Redirect to a different page
        })
        .catch((error) => {
          console.error('Error exchanging code for token:', error);
        });
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Login;