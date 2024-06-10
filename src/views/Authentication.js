import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import LoadingDonut from "../assets/loading-donut.gif";

const Authentication = () => {
  const { login, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const ghUserCode = searchParams.get("code");

  useEffect(() => {
    login(ghUserCode);
  }, [login, ghUserCode]);

  useEffect(() => {
    if (user && user.github_username) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-2xl">
        Loading...
        <img src={LoadingDonut} alt="Loading..." className="h-200 w-200" />
      </p>
    </div>
  );
};

export default Authentication;
