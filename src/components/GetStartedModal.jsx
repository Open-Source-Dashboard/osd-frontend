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
                        <div>Slide 1</div>
                        <div>Slide 2</div>
                        <div>Slide 3</div>
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default GetStartedModal;

