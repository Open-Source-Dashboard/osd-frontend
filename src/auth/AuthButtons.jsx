import React from "react";
import { useAuth } from "./AuthContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButtons = () => {
  const { user } = useAuth();
  const githubUsername = user.github_username || "User!";

  return (
    <>
      {user.github_username ? (
        <div className="items-start mb-6 rounded-md justify-left textbase">
          {/* <div className="flex items-center justify-center text-white font-bold h-full w-full rounded-md mb-2 p-2">
            <span className="text-md">Hi {githubUsername}</span>
          </div> */}
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default AuthButtons;
