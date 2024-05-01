import { createContext, useContext, useState } from 'react';
import axios from 'axios';
const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const ghAuthUrl = process.env.REACT_APP_AUTH_API_URL;

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: {},
    login,
  });

  async function login(ghUserCode, osdUserToken) {
    let userResponse;

    if (ghUserCode) {
      userResponse = await ghLogin(ghUserCode);
    }

    const newUser = {
      user: userResponse.data,
    };

    setState((prevState) => ({
      ...prevState,
      ...newUser,
    }));
  }

  async function ghLogin(ghUserCode) {
    try {
      const response = await axios.get(`${ghAuthUrl}?code=${ghUserCode}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ userToken: state }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthButtonUrl = () => {
  // TODO: add local storage check for user token, if present then use a different URL for our own auth which already has the github token
  return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
};
