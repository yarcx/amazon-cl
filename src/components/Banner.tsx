import { Carousel } from "react-responsive-carousel";
import SliderImg_1 from "../images/slider/sliderImg_1.jpg";
import SliderImg_2 from "../images/slider/sliderImg_2.jpg";
import SliderImg_3 from "../images/slider/sliderImg_3.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image priority src={SliderImg_1} alt='Slide 1' />
        </div>
        <div>
          <Image src={SliderImg_2} alt='Slide 2' />
        </div>
        <div>
          <Image src={SliderImg_3} alt='Slide 3' />
        </div>
      </Carousel>
      <div className='absolute bottom-0 z-20 w-full h-40 bg-gradient-to-t from-gray-100 to-transparent'></div>
    </div>
  );
};

export default Banner;
