import { useAuth } from './AuthContext';
import { FaGithub } from 'react-icons/fa';

const AuthButtons = () => {
  const { user, userButtonUrl } = useAuth();

  return (
    <>
      <a
        href={userButtonUrl()}
        className='flex items-center px-3 py-2 font-medium text-black rounded-md textbase hover:text-bg-purple-600'
      >
        <span>{user.github_username ? user.github_username : 'Login'}</span>
        <FaGithub className='ml-2' />
      </a>
    </>
  );
};

export default AuthButtons;
