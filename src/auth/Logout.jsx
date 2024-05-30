import React from 'react';
import { useAuth } from './AuthContext';

const LogoutButton = () => {
    const { user, logout } = useAuth();
  
    return user.github_username ? (
      <button onClick={logout} className="py-2 rounded-md px- font-small text-md hover:text-light-blue" >
        Logout
      </button>
    ) : null;
  };

export default LogoutButton;
