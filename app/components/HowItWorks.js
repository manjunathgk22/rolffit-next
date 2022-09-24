import React, { useRef } from "react";
import Slider from "react-slick/lib/slider";

import { motion } from "framer-motion";

const dotsText = ["quick setup", "special chair therapy", "expert therapists"];
function HowItWorks() {
  const dotRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dontAnimate: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    // fade: true,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 30000,
    animating: false,
    appendDots: (dots) => {
      return (
        <div
          style={{
            // backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            paddingTop: "2rem",
          }}
        >
          {dots?.map((item, i) => (
            <div index={i} className="dotWrapper flex whitespace-nowrap w-5/6 md:w-auto min-w-[83%] md:min-w-[auto]">
              {item}
            </div>
          ))}
        </div>
      );
    },
    customPaging: (i, ...props) => {
      return (
        <div>
          <div className="dotText">{dotsText[i]}</div>
          <div className="slider-progress">
            <div className="progress"></div>
          </div>
        </div>
      );
    },
    beforeChange: (current, next) => {
      if (window.innerWidth < 640) {
        const wrapper = dotRef.current.getElementsByClassName("slick-dots")[0];
        if (wrapper) wrapper.scrollLeft = wrapper.getElementsByTagName("li")[0]?.clientWidth * (next % 3);
      }
    },
    afterChange: (...page) => {},
  };
  const variants = {
    visible: { opacity: 1, background: "red" },
    hidden: { opacity: 0 },
  };
  return (
    <div style={{ backgroundColor: "#f9f1e4" }} className={`relative py-8 clipTop clipbottom`}>
      <div ref={dotRef} className="max-w-6xl container m-auto p-4 lg:py-16">
        <div className="font-geomanist h5 sm:h4 md:h3 lg:text-6xl text-4xl font-bold text-center mb-8">how it works?</div>
        <Slider {...settings}>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                <div style={{ height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" lg:m-8 m-4 bg-[url('/images/tent.jpg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-geomanist">quick setup</h3>
                {/* <p>rolf.fit brings its setup to your office. The specially designed set-up takes a few minutes to install. It does not take up much of your space and ensures privacy for the employees during the massage.</p> */}
                <li className="bullet">We create a specially designed oasis of relaxation within a few minutes in the midst of your busy office environment.</li>
                <li className="bullet">Our team ensures that you get absolute privacy and comfort on our on-site massage chairs.</li>
                <li className="bullet">Our head massages can be customised to cater your needs ranging from 10 to 30 mins.</li>
              </div>
            </div>
          </div>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                {/* <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                <div style={{ height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" lg:m-8 m-4 bg-[url('/images/chair.jpeg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-geomanist">special chair therapy</h3>
                <li className="bullet">Our masseuses are professionally trained to give you seated head, neck shoulder and back massages that instantly lift your spirits and give you a boost of energy.</li>
                <li className="bullet">No clothing is removed or oils are used.</li>
                <li className="bullet">Each massage is concluded with a re-energising facial spritz.</li>
              </div>
            </div>
          </div>
          <div>
            <div style={{}} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
              <div className="animate-left">
                {/* <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                <div style={{ height: "350px", width: "auto", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative" }} className=" lg:m-8 m-4 bg-[url('/images/therapist.jpeg')]">
                  {/* <img style={{ width: "100%", boxSizing: "border-box", margin: "0" }} className="image lg:h-96 md:h-80 h-44" src={tent} alt="" height="2197" width="2813" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "} */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white wheatsvg pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                    <g data-name="Layer 2">
                      <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-container animate-right" style={{ flex: 1 }}>
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-geomanist">expert therapists</h3>
                <li className="bullet">All our masseuses are professionally trained and accredited to provide you with the best services.</li>
                <li className="bullet">Our therapists work on your pressure points for maximum relaxation.</li>
                <li className="bullet">Our team is dressed professionally and follow strict hygiene protocols.</li>
              </div>
            </div>
          </div>
          {/* <div>
          <div style={{  }} className="mb-8 flex-col justify-center items-center md:flex md:flex-row">
            <div className="animate-left">
              <img className="image lg:h-96 md:h-80 h-44" style={{ width: "100%", boxSizing: "border-box", padding: "2rem", margin: "0" }} src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-src="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" alt="" height="2197" width="2813" data-mobile-image="https://www.plan.london/wp-content/uploads/2021/11/Icons-Final-17.png" data-mobile-image-width="1024" data-mobile-image-height="800" />{" "}
            </div>
            <div className="content-container animate-right" style={{ flex: 1 }}>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 font-geomanist">Authentic massage products</h3>
              <p>Every product used in massage therapies is of premium quality. It undergoes a thorough quality check.</p>
            </div>
          </div>
        </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default HowItWorks;
