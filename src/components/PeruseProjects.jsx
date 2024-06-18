import React, { useContext } from "react";
import Slider from "react-slick";
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PeruseProjects = () => {
  const { popularRepos } = useContext(RepoContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 shadow-gray-500/50 bg-purple rounded-md">
      <h2 className="mt-0 mb-2 text-xl font-bold text-center">Peruse Projects</h2>
      
      {popularRepos.length > 0 ? (
        <Slider {...settings}>
          {popularRepos.map((repo) => (
            <div key={repo.id} className="p-2 rounded-lg shadow-md bg-gray-md">
              <div className="flex justify-center">
                {repo.owner && repo.owner.avatar_url ? (
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.name}
                    className="w-20 h-20 rounded-lg"
                  />
                ) : (
                  <img
                    src={backupDonutImage}
                    alt={repo.name}
                    className="w-20 h-20 rounded-lg"
                  />
                )}
              </div>
              <h2>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold"
                >
                  {repo.name}
                </a>
              </h2>
              <p className="text-sm text-white">⭐ {repo.stargazers_count}</p>
              <p className="py-2 text-xs text-white mb-2">{repo.description}</p>
              <p className="text-xs text-light-pink">
                Topics:{" "}
                {repo.topics.map((topic, index) => (
                  <span key={topic}>
                    {topic}
                    {index !== repo.topics.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PeruseProjects;
