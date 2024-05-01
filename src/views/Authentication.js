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
  }, []);

  return (
    <div>
      <h1>Authentication</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default Authentication;
