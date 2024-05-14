import React from 'react';

const CommitGraph = () => {
  // TODO Remove hard oded name
  const imageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=ariley215&theme=dracula&line=FFD700&point=00FFFF`;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img src={imageUrl} alt="GitHub Commit Graph" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default CommitGraph;
