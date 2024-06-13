import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
        <button onClick={logout} className="py-2 text-lg rounded-md font-small hover:text-pink">
            Logout
        </button>
    ) : null;
};

export default LogoutButton;
