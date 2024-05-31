import React from "react";

const CommitGraph = () => {
  const imageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=ariley215&theme=dracula&line=FFD700&point=00FFFF&height=280`;

  return (
    <div className="relative text-center">
      <img
        src={imageUrl}
        alt="GitHub Commit Graph"
        className="h-auto max-w-full rounded-lg"
      />
    </div>
  );
};

export default CommitGraph;
