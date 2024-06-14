import React from "react";
import { useAuth } from "../auth/AuthContext";

const CommitGraph = () => {
  const { user } = useAuth();
  const githubUsername = user.github_username;

  const graphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=5a5a5a&line=ffc4d1&point=fff&height=230&color=ff3c68&title_color=fff`;

  return (
    <div className="relative h-full overflow-scroll text-center">
      <img
        src={graphImageUrl}
        alt="GitHub Commit Graph"
        className="h-auto max-w-full rounded-lg"
      />
    </div>
  );
};

export default CommitGraph;
