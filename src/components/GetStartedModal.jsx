import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "./auth/AuthContext";
// TODO: Create a logo for Donut Dashboard
import logo from '../assets/donut-icons/color/donut-dashboard-logo.png';

const GetStartedModal = () => {
  const { user } = useAuth();
  const github_username = user.github_username || "";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-3/4 m-auto rounded-lg shadow-lg">
        <Slider {...settings}>
          <div className="carousel-slide flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome {github_username}!</h1>
            {/* <img src={logo} alt="Donut Dashboard Logo" className="w-48 h-48 object-cover mb-4" /> */}
            <p className="text-gray-700 font-semibold mb-4">
              Welcome to Donut Dashboard—a place built for developers like you who are eager to contribute to Open Source projects.
            </p>
            <h3 className="text-xl font-semibold mb-2">How it Works</h3>
            <p className="text-gray-700 font-semibold">
              Earn Donuts for Contributions: Each commit you make earns you a donut on your virtual donut reward card. For every six donuts you collect, you get a box of donuts. It's our way of adding a bit of fun to the serious business of coding!
            </p>
          </div>
          <div className="carousel-slide flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold mb-4">Make a Contribution</h1>
            <h3 className="text-xl font-semibold mb-2">Find an Issue:</h3>
            <p className="text-gray-700 font-semibold mb-4">
              When a project catches your eye, click its title to navigate to its GitHub repository.
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Once in the repository, go to the 'Issues' section and use labels to filter and find tasks that match your skills or areas you're keen to explore.
            </p>
            <h3 className="text-xl font-semibold mb-2">Start Contributing:</h3>
            <p className="text-gray-700 font-semibold mb-4">
              Pick an issue and start working on it. Each contribution not only helps you fill your donut rewards card but also builds your experience in open-source software development.
            </p>
            <p className="text-gray-700 font-semibold">
              Start committing and watch your donut card fill up with every contribution you make. Happy coding and collecting! 🍩
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default GetStartedModal;
