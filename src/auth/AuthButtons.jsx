import { useAuth } from './AuthContext';
import { FaGithub } from 'react-icons/fa';

const AuthButtons = () => {
  const { user, userButtonUrl } = useAuth();

  return (
    <>
      <a
        href={userButtonUrl()}
        className='flex items-center px-3 py-2 font-medium rounded-md textbase text-xl'
      >
        <span>{user.github_username ? user.github_username : 'Login'}</span>
        <FaGithub className='ml-2' />
      </a>
    </>
  );
};

export default AuthButtons;
