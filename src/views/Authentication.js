import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import LoadingDonut from '../assets/loading-donut.gif';

const Authentication = () => {
  const { login, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const ghUserCode = searchParams.get('code');

  useEffect(() => {
    login(ghUserCode);
  }, [login, ghUserCode]); // Added missing dependencies 'login' and 'ghUserCode'

  useEffect(() => {
    if (user.github_username) {
      navigate('/');
    }
  }, [user, navigate]); // Added missing dependency 'navigate'

  return (
    <div className="flex items-center justify-center min-h-screen">
    {Object.keys(user).length === 0 ? <p className="text-2xl">
      Loading...
      <img src={LoadingDonut} alt="Loading..." className='h-200 w-200'/>
      </p> : <p>{JSON.stringify(user)}</p>}
  </div>
  );
};

export default Authentication;
