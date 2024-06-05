import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUser] = useState({});
  const [tokenChecked, setTokenChecked] = useState(false);
  const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  useEffect(() => {
    const checkForTokenAndFetchUserData = async () => {
      const token = localStorage.getItem("user_access_token");
      if (!token) {
        console.log("No access token found in localStorage");
        setTokenChecked(false);
        return;
      }
      setTokenChecked(true);

      try {
        const response = await axios.get(
          `${API_SERVER_URL}/repos/api/github/commit-history/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = response.data;
        setUser(user);
        console.log("User's recent commit-history:", user);

        // small comment to test backend 1
        // small comment to test backend 2
        // small comment to test backend 3
        // small comment to test backend 4
        // small comment to test backend 5
        // small comment to test backend 6

      } catch (error) {
        console.error("Error fetching or sending user data:", error);
      }
    };

    if (!tokenChecked) {
      const intervalId = setInterval(() => {
        const token = localStorage.getItem("user_access_token");
        if (token) {
          clearInterval(intervalId);
          checkForTokenAndFetchUserData();
        }
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      checkForTokenAndFetchUserData();
    }
  }, [API_SERVER_URL, tokenChecked]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
