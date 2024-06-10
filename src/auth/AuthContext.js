import { createContext, useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    determineAuthUrl();
  }, []);

  const saveTokenToLocalStorage = (userAccessToken) => {
    localStorage.setItem("user_access_token", userAccessToken);
  };

  function determineAuthUrl() {
    if (userState.user.github_username) {
      // User is already authenticated via GitHub
      return "#";

    } else if (localStorage.getItem("user_access_token")) {
      // User has a valid access token stored locally
      return "";

    } else {
        // User is not authenticated. Provide GitHub OAuth URL for login
      return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
    }
  }

  async function login(ghUserCode, osdUserToken) {
    try {
      let userResponse;
      if (ghUserCode) {
        userResponse = await ghLogin(ghUserCode);
      } else if (osdUserToken) {
        userResponse = await osdLogin(osdUserToken);
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

  async function ghLogin(ghUserCode) {
    try {
      const response = await axios.get(`${ghAuthUrl}?code=${ghUserCode}`);
      console.log("User data with updated opensource_commits_count", response);

      return response;
    } catch (error) {
      console.error("GitHub login error: ", error);
    }
  }

  async function osdLogin(osdUserToken) {
    console.log("osdLogin", osdUserToken);
    try {
      const response = await axios.get(`${osdAuthUrl}?token=${osdUserToken}`);
      return response;
    } catch (error) {
      console.error("OSD login error: ", error);
    }
  }

  const logout = () => {
    localStorage.removeItem("user_access_token");
    setUserState({
      user: {},
      isLoading: true,
    });
  };

  return (
    <AuthContext.Provider value={{ ...userState, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
