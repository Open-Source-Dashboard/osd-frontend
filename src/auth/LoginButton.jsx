import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

const LoginButton = () => {

  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${ghClientId}`}
      className='flex items-center pt-2 pb-6 text-xl rounded-md font-small textbase hover:text-light-blue'>
      <span>Login</span>
      <FaGithub className='ml-2' />
    </a>
  );
};

export default LoginButton;
