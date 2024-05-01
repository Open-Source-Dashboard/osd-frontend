import React from 'react';
import { FaGithub } from 'react-icons/fa';

const AuthButtons = () => {
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  // const redirectUri=process.env.REACT_APP_GITHUB_CALLBACK_URL;

  // const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirectUri}`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

  return (
    <div>
      <a
        href={githubAuthUrl}
        className='flex items-center px-3 py-2 font-medium text-black rounded-md textbase hover:text-bg-purple-600'
      >
        <FaGithub className='mr-2' />
        Login
      </a>
    </div>
  );
};

export default AuthButtons;
