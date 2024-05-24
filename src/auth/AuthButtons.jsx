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
        <div className='flex items-center px-3 py-2 text-xl font-medium rounded-md textbase'>
          <span>{user.github_username}</span>
          <FaGithub className='ml-2' />
          <LogoutButton />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AuthButtons;
