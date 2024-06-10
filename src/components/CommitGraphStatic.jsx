import React from 'react';

const CommitGraph = () => {
  const staticGithubUsername = 'tammytdo';

  const staticGraphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${staticGithubUsername}&theme=dracula&line=FFD700&point=00FFFF&height=280`;

  return (
    <div className="text-center">
      <img 
        src={staticGraphImageUrl} 
        alt="GitHub Commit Graph" 
        className="h-auto max-w-full rounded-sm" 
      />
    </div>
  );
};

export default CommitGraph;
