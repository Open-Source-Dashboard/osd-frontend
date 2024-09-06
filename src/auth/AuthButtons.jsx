import React from 'react';
import { useAuth } from './AuthContext';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthButtons = () => {
  const { user } = useAuth();

  return (
    <>
      {user.github_username ? (
        <div className='items-start mb-2 rounded-md justify-left textbase'>
          <div className='flex items-center'>
            {/* <span className="text-md">Hi {githubUsername}</span> */}
          </div>
          <LogoutButton />
        </div>
      ) : (
        <div>
        <LoginButton />
        </div>
      )}
    </>
  );
};

export default AuthButtons;
