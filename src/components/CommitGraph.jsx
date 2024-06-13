import React from "react";
import { useAuth } from "../auth/AuthContext";

const CommitGraph = () => {
  const { user } = useAuth();
  const githubUsername = user.github_username;

  const graphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=ff3c68&line=fff&point=3f3cbb&height=230&color=3f3cbb&title_color=fff`;

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
