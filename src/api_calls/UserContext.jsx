import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUser] = useState({});
    const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${API_SERVER_URL}/accounts/users/me/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("user_access_token")}`
                    }
                });
                setUser(response.data);
                console.log('Fetched user data:', response.data); 
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getUserData();
    }, [API_SERVER_URL]);

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
