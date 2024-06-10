import React from "react";
import { useAuth } from "../auth/AuthContext";

const CommitGraph = () => {
  const { user } = useAuth();
  const githubUsername = user.github_username;

  const graphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=dracula&line=FFD700&point=00FFFF&height=280`;

  return (
    <div className="relative text-center">
      <img
        src={graphImageUrl}
        alt="GitHub Commit Graph"
        className="h-auto max-w-full rounded-lg"
      />
    </div>
  );
};

export default CommitGraph;
