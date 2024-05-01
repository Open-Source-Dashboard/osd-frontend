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
    // check for osdUserToken or ghUserCode and route to appropriate login API
    let userResponse;
    if (ghUserCode) {
      userResponse = await ghLogin(ghUserCode);
      console.log({ userResponse });
    }
    // on successful login, create a user object
    let newUser;
    if (userResponse) {
      if (userResponse.status === 200 && userResponse.data) {
        newUser = {
          user: userResponse.data,
        };
      }
    }
    // on success, set the user object in state
    if (userResponse && newUser) {
      setState((prevState) => ({
        ...prevState,
        ...newUser,
      }));
    }
  }

  async function ghLogin(ghUserCode) {
    try {
      const response = await axios.get(`${ghAuthUrl}?code=${ghUserCode}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export const AuthButtonUrl = () => {
  // TODO: add local storage check for user token, if present then use a different URL for our own auth which already has the github token
  return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
};
