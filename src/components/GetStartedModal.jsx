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
            <div className="bg-white w-3/4 m-auto rounded-lg shadow-lg">
                <div className='mt-5'>
                    <Slider {...settings}>
                        <div className='carousel-slide flex items-center'>
                            <h1>Welcome!</h1>
                            {/* <img src={logo} alt="Donut Logo" className=" w-48 h-48 object-cover align-middle"></img> */}
                            <p className='text-gray-700'>Welcome to Donut Dashboard—a place built for developers like you who are eager to contribute to Open Source projects.</p>
                            <h3>How it Works</h3>
                            <p className='text-gray-700'>Earn Donuts for Contributions: Each commit you make earns you a donut on your virtual donut reward card. For every six donuts you collect, you get a box of donuts. It's our way of adding a bit of fun to the serious business of coding!</p>
                            </div>
                            <div className='carousel-slide'>
                                <h3>Where to Start</h3>
                            <p className='text-gray-700'>Select a Project: If a project catches your eye, click its title to navigate to its GitHub repository.</p>
                            </div>
                            <div className='carousel-slide'>
                                <h3>3</h3>
                        </div>
                    </Slider>
                
                </div>
            </div>
        </div>
    );
};



export default GetStartedModal;



