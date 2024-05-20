import { createContext, useContext, useState } from "react";
import axios from "axios";
const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const ghAuthUrl = process.env.REACT_APP_AUTH_API_URL;
const osdAuthUrl = "";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userState, setUserState] = useState({
    user: {},
      login,
      userButtonUrl: userButtonUrl,
      isLoading: false,
  });

  const saveTokenToLocalStorage = (user_access_token) => {
    console.log("user_access_token", user_access_token);
    localStorage.setItem("user_access_token", user_access_token);
  };

  function userButtonUrl() {
    // Check local storage for user token, if present then use a different URL for our own auth which already has the github token
    if (userState.user.github_username) {
      return "#";
    } else if (localStorage.getItem("osd_user_token")) {
      return "";
    } else {
      return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
    }
  }

  async function login(ghUserCode, osdUserToken) {
    // check for osdUserToken or ghUserCode and route to login API
    let userResponse;
    let newUser;

    if (ghUserCode) {
      userResponse = await ghLogin(ghUserCode);
      console.log("received ghUserCode");
    } else if (osdUserToken) {
      userResponse = await osdLogin(osdUserToken);
      console.log("received osdUserToken");
    }

    if (userResponse) {
      if (userResponse.status === 200 && userResponse.data) {
        newUser = {
          user: userResponse.data,
        };
        saveTokenToLocalStorage(userResponse.data.token);
      }
    }

    if (userResponse && newUser) {
      console.log("newUser and access_token from the server: ", newUser);
      setUserState((prevState) => ({
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

  async function osdLogin(osdUserToken) {
    try {
      const response = await axios.get(`${osdAuthUrl}?token=${osdUserToken}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const logout = () => {
    localStorage.removeItem("user_access_token");
    setUserState({ user: {}, isLoading: true });
  };


  return (
    <AuthContext.Provider value={{ ...userState, logout }}>{children}</AuthContext.Provider>
  );
};

