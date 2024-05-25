import React from 'react';
import { useAuth } from './AuthContext';
import { FaGithub } from 'react-icons/fa';
import Login from './Login';
import LogoutButton from './Logout';

const AuthButtons = () => {
  const { user } = useAuth();

  return (
    <>
      {user.github_username ? (
        <div className='flex flex-col items-start rounded-md justify-left font-small textbase'>
          <div className='flex items-center'>
            <span>{user.github_username}</span>
            <FaGithub className='ml-2' />
          </div>
          <LogoutButton />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AuthButtons;
