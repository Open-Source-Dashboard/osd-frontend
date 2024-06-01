import { createContext, useContext, useState } from "react";
import axios from "axios";

const ghAuthUrl = process.env.REACT_APP_AUTH_API_URL;
const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const osdAuthUrl = "";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userState, setUserState] = useState({
    user: {},
    login,
    isLoading: false,
  });

  // TODO: Find a better place to invoke this
  determineAuthUrl()

  const saveTokenToLocalStorage = (userAccessToken) => {
    localStorage.setItem("user_access_token", userAccessToken);
  };

  // // Determine the URL for the user button based on authentication status
  function determineAuthUrl() {
    if (userState.user.github_username) {
      console.log('User is already authenticated with GitHub');
      return "#";

    } else if (localStorage.getItem("user_access_token")) {
      console.log('User has a valid access token in local storage');
      return "";

    } else {
      console.log('User is not authenticated, provide GitHub OAuth URL for login');
      return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
    }
  }

  // Handle login by either GitHub user code or another user token, fetch user data, and update the state
  // Use this login instead of Login.jsx
  async function login(ghUserCode, osdUserToken) {
    try {
      let userResponse;
      if (ghUserCode) {
        userResponse = await ghLogin(ghUserCode);
      } else if (osdUserToken) {
        userResponse = await osdLogin(osdUserToken);
        console.log("Received OSD user token");
      }

      if (userResponse && userResponse.status === 200 && userResponse.data) {
        const newUser = {
          user: userResponse.data,
        };
        const access_token = userResponse.data.access_token;
        saveTokenToLocalStorage(access_token);

        setUserState((prevState) => ({
          ...prevState,
          ...newUser,
        }));
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  }

  // Perform GitHub login by sending a GET request to the GitHub authentication URL with the provided user code
  async function ghLogin(ghUserCode) {
    // console.log('ghLogin', ghUserCode)
    try {
      const response = await axios.get(`${ghAuthUrl}?code=${ghUserCode}`);
      return response;
    } catch (error) {
      console.error("GitHub login error: ", error);
    }
  }

  // Perform OSD login by sending a GET request to the OSD authentication URL with the provided user token
  async function osdLogin(osdUserToken) {
    console.log('osdLogin', osdUserToken)
    try {
      const response = await axios.get(`${osdAuthUrl}?token=${osdUserToken}`);
      return response;
    } catch (error) {
      console.error("OSD login error: ", error);
    }
  }

  // Clear the user access token from local storage and reset the user state
  const logout = () => {
    localStorage.removeItem("user_access_token");
    setUserState({ 
      user: {} 
      , isLoading: true 
    });
  };

  // Provide the authentication state and functions to the rest of the application through AuthContext.Provider
  return (
    <AuthContext.Provider value={{ ...userState, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
