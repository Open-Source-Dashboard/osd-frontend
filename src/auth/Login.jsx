import { useUser } from '../api_calls/UserContext';

const Login = () => {
  const user = useUser();

  return (
    <>
      {user.github_username ? (
        <div>
          <h1>Logged in!</h1>
          <p>Github Username: {JSON.stringify(user.github_username)}</p>
        </div>
      ) : (
        <div>
          <h1>Not logged in!</h1>
        </div>
      )}
    </>
  );
};

export default Login;
