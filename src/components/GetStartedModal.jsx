import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import logo from '../assets/donut-logo-dark-purple.png';

const GetStartedModal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1    
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-3/4 m-auto rounded-lg shadow-lg ">
                <div>
                    <Slider {...settings}>
                        <div className='carousel-slide flex items-center'>
                            <h1>Welcome!</h1>
                            {/* <img src={logo} alt="Donut Logo" className=" w-48 h-48 object-cover align-middle"></img> */}
                            <p className='text-gray-700 font-semibold '>Welcome to Donut Dashboard—a place built for developers like you who are eager to contribute to Open Source projects.</p>
                            <h3>How it Works</h3>
                            <p className='text-gray-700 font-semibold '>Earn Donuts for Contributions: Each commit you make earns you a donut on your virtual donut reward card. For every six donuts you collect, you get a box of donuts. It's our way of adding a bit of fun to the serious business of coding!</p>
                        </div>
                        <div className='carousel-slide'>
                            <h1>Make a Contribution</h1>
                            <h3></h3>
                                <p className='text-gray-700 font-semibold '>Check out Peruse Projects or the Featured Project of the Month.</p>
                            <h3>Find an Issue:</h3>
                                <p className='text-gray-700 font-semibold '>When a project catches your eye, click its title to navigate to its GitHub repository.</p>
                            <p className='text-gray-700 font-semibold '> Once in the repository, go to the 'Issues' section and use labels to filter and find tasks that match your skills or areas you're keen to explore.</p>
                            <h3>Start Contributing:</h3>
                                <p className='text-gray-700 font-semibold '> Pick an issue and start working on it. Each contribution not only helps you fill your donut rewards card but also builds your experience in open-source software development.</p>
                            <p className='text-gray-700 font-semibold '>Start committing and watch your donut card fill up with every contribution you make. Happy coding and collecting!🍩</p>
                            <p></p>
                        </div>
                    </Slider>
                
                </div>
            </div>
        </div>
    );
};



export default GetStartedModal;



