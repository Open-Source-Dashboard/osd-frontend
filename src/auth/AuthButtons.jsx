import React from 'react';
import { useAuth } from './AuthContext';
import { FaGithub } from 'react-icons/fa';
import LogoutButton from './Logout';

const AuthButtons = () => {
  const { user, userButtonUrl } = useAuth();

  return (
    <>
      <a
        href={userButtonUrl()}
        className='flex items-center px-3 py-2 text-xl font-medium rounded-md textbase hover:text-light-blue'
      >
        <span>{user.github_username ? user.github_username : 'Login'}</span>
        <FaGithub className='ml-2' />
      </a>
      {user.github_username && <LogoutButton />}
    </>
  );
};

export default AuthButtons;
