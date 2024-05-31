import React from 'react';

const CommitGraph = () => {
  const imageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=ariley215&theme=dracula&line=FFD700&point=00FFFF`;

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
