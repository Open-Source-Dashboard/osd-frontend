import { AuthButtonUrl } from './AuthContext';
import { FaGithub } from 'react-icons/fa';

const AuthButtons = () => {
  return (
    <div>
      <a
        href={AuthButtonUrl()}
        className='flex items-center px-3 py-2 font-medium text-black rounded-md textbase hover:text-bg-purple-600'
      >
        <FaGithub className='mr-2' />
        Login
      </a>
    </div>
  );
};

export default AuthButtons;
