import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

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
    <div>
    {Object.keys(user).length === 0 ? <p className="text-2xl">Loading...</p> : <p>{JSON.stringify(user)}</p>}
  </div>
  );
};

export default Authentication;
