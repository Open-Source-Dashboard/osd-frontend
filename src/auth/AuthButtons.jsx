import React from 'react';
import { useAuth } from './AuthContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthButtons = () => {
  const { user } = useAuth();
  const githubUsername = user.github_username || "User!";

  return (
    <>
      {user.github_username ? (
        <div className='items-start mb-6 rounded-md justify-left font-small textbase'>
          <div className='flex items-center'>
            <span>Hi {githubUsername}</span>
          </div>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default AuthButtons;
