import React from "react";
import { FaGithub } from "react-icons/fa";

const ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;

const LoginButton = () => {
  const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${ghClientId}`;

  return (
    <a
      href={githubOAuthUrl}
      className="flex items-center pt-2 mb-10 text-xl rounded-md textbase hover:text-orange"
    >
      <span>Login</span>
      <FaGithub className="ml-2" />
    </a>
  );
};

export default LoginButton;
