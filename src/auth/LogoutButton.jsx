import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
        <button onClick={logout} className="py-2 rounded-md text-md hover:text-pink bg-gray-md w-full text-left p-2 m-0">
            Logout
        </button>
    ) : null;
};

export default LogoutButton;
