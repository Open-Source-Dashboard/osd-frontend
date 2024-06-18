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
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="p-1 mt-8 border border-gray-md rounded-md">
      <h2 className="mt-0 mb-2 p-1 text-xl font-bold text-center bg-purple rounded-t-md">Peruse Projects</h2>
      
      {popularRepos.length > 0 ? (
        <Slider {...settings}>
          {popularRepos.map((repo) => (
            <div key={repo.id} className="px-3 h-full">
              <div className="border border-white rounded-md bg-gray-md p-4 h-96 max-w-xs mx-auto">
                <div className="flex justify-center mb-4">
                  <img
                    src={repo.owner && repo.owner.avatar_url ? repo.owner.avatar_url : backupDonutImage}
                    alt={repo.name}
                    className="w-20 h-20 rounded-lg"
                  />
                </div>
                <h2 className="text-center mt-2 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="text-sm text-white text-center m-2 p-2">⭐ {repo.stargazers_count}</p>
                <p className="text-xs text-white mb-2 text-center">{repo.description}</p>
                <p className="text-xs text-light-pink text-center">
                  Topics:{" "}
                  {repo.topics.map((topic, index) => (
                    <span key={topic}>
                      {topic}
                      {index !== repo.topics.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
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
