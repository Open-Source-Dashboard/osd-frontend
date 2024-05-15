import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const GetStartedModal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-5 rounded-lg shadow-lg">
                    <Slider {...settings}>
                        <h1></h1>
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default GetStartedModal;

