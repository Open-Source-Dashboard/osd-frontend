import React from 'react';
import { useAuth } from "../auth/AuthContext";

const CommitGraph = () => {
  const { user } = useAuth();

  // TODO: Decide how to handle a user without a commit history or a graph that doesnt load
  const username = user?.github_username || 'default-username';

  const imageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=dracula&line=FFD700&point=00FFFF`;

  return (
    <div className="text-center">
      <img 
        src={imageUrl} 
        alt="GitHub Commit Graph" 
        className="h-auto max-w-full rounded-sm" 
      />
    </div>
  );
};

export default CommitGraph;
