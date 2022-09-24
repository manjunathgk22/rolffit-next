import React, { useMemo } from "react";
import Slider from "react-slick";
import useCheckDevice from "../../hooks/useCheckDevice";

function Clients({ images }) {
  const isMobile = useCheckDevice();

  const settings = useMemo(
    () => ({
      infinite: true,
      slidesToShow: isMobile ? 2 : 6,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      arrows: false,
      slidesToScroll: 1,
    }),
    [isMobile]
  );

  return (
    <div className="flex-col flex-wrap lg:w-4/5 w-11/12 mx-auto pb-12 md:pb-24 lg:pb-24 justify-center pt-4">
      <div className="h5 sm:h4 md:h3 text-xl mb-12 text-center font-comfort">Some of our satisfied clients:</div>
      <div>
        <Slider {...settings}>
          {images.map((image) => (
            <img src={image.logo} alt={image.name} className="px-10" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
