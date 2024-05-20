import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
      <button onClick={logout} className="flex items-center px-3 ml-6 py-2 text-xl font-medium rounded-md logout-button hover:text-light-blue" >
        Logout
      </button>
    ) : null;
  };

export default LogoutButton;
