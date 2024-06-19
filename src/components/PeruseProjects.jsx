import React, { useContext } from "react";
import Slider from 'react-slick';
import { RepoContext } from "../api_calls/RepoContext";
import backupDonutImage from "../assets/donut-icons/color/donut-purple.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PeruseProjects = () => {
  const { popularRepos } = useContext(RepoContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%", // Show 25% of the next and previous slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="h-full overflow-y-auto shadow-gray-500/50 bg-gray p-3 pt-1">
      <h2 className="mt-0 mb-2 text-xl font-bold">Peruse Opensource Project</h2>

      {popularRepos.length > 0 ? (
        <Slider {...settings}>
          {popularRepos.map((repo) => (
            <div key={repo.id} className="px-3">
              <div className="p-4 rounded-lg shadow-md bg-gray-md mx-2">
                <div className="flex justify-center mb-4">
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
                <p className="text-sm text-white text-center">⭐ {repo.stargazers_count}</p>
                <p className="py-2 text-xs text-white text-center">{repo.description}</p>
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
