import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
        <button onClick={logout} className="py-2 rounded-md text-md hover:text-pink bg-blue-light w-full text-left pl-2 mb-3">
            Logout
        </button>
    ) : null;
};

export default LogoutButton;
