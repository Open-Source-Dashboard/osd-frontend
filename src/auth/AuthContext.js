import { createContext, useContext, useState } from 'react';
const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const ghAuthUrl = process.env.REACT_APP_AUTH_API_URL;

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: {},
  });

  async function getUserToken(code) {
    try {
      const userTokenResponse = await fetch(`${ghAuthUrl}?code=${code}`);
      const userTokenStatus = userTokenResponse.status;
      const userToken = await userTokenResponse.json();

      if (userTokenStatus === 200) {
        setState(userToken);
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
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
}
