import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
  return (
    <a
      href={'https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_GITHUB_CLIENT_ID}
      className='flex items-center py-2 text-xl rounded-md font-small textbase hover:text-light-blue'>
      <span>Login</span>
      <FaGithub className='ml-2' />
    </a>
  );
};

export default Login;
