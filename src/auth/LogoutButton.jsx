import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
        <button onClick={logout} className="py-2 rounded-md text-md hover:text-orange">
            Logout
        </button>
    ) : null;
};

export default LogoutButton;
