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
    localStorage.setItem("user_access_token", user_access_token);
  };

  function userButtonUrl() {
    if (userState.user.github_username) {
      return "#";
    } else if (localStorage.getItem("osd_user_token")) {
      return "";
    } else {
      return `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;
    }
  }

  async function login(ghUserCode, osdUserToken) {
    let userResponse;
    let newUser;

    if (ghUserCode) {
      userResponse = await ghLogin(ghUserCode);
    } else if (osdUserToken) {
      userResponse = await osdLogin(osdUserToken);
    }


    if (userResponse && userResponse.status === 200 && userResponse.data) {
      newUser = {
        user: userResponse.data,
      };
      const user_access_token = userResponse.data.access_token;
      saveTokenToLocalStorage(user_access_token);
    }

    if (userResponse && newUser) {
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
    <AuthContext.Provider value={{ ...userState, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
