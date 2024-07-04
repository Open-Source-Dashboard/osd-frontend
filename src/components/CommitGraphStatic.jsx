import React from "react";

const CommitGraphStatic = () => {
  const githubUsername = 'tammytdo';

  const graphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=dadada&line=ff4f77&point=fff&height=200&color=3F3CBB&custom_title=my%20contributions`;

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

export default CommitGraphStatic;
