import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUser] = useState({});
    const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

    useEffect(() => {
        const getUserData = async () => {
            try {
                // TODO: create this path on server
                const response = await axios.get(`${API_SERVER_URL}/accounts/users/me/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("user_access_token")}`
                    }
                });
                const user = response.data;
                setUser(user);
                console.log('Fetched user data:', user);

                // Send username to backend. Can I link this to the existing /check-user path?
                await axios.post(`${API_SERVER_URL}/accounts/users/check-user`, { username: user.username }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("user_access_token")}`
                    }
                });
                console.log('Username sent to backend');
            } catch (error) {
                console.error("Error fetching or sending user data:", error);
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