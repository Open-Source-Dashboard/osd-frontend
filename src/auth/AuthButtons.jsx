import React from 'react';
import { useAuth } from './AuthContext';
import { FaGithub } from 'react-icons/fa';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthButtons = () => {
  const { user } = useAuth();

  return (
    <>
      {user.github_username ? (
        <div className='items-start mb-6 rounded-md justify-left font-small textbase'>
          <div className='flex items-center'>
            <span>{user.github_username}</span>
            <FaGithub className='ml-2' />
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
