/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  const ref = useRef(null);
  const [planIndex, setplanIndex] = useState(2);
  const handleClick = (value) => {
    if (!ref) return;
    if (ref.current.classList.contains("right-[123px]")) {
      ref.current.classList.remove("right-[123px]");
      ref.current.classList.add("right-1");
    } else {
      ref.current.classList.remove("right-1");
      ref.current.classList.add("right-[123px]");
    }

    setplanIndex(value);
  };

  const openCalendly = () => {
    window.open("https://calendly.com/rolf-fit/");
  };

  useEffect(() => {}, []);

  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="font-geomanist h5 sm:h4 md:h3 lg:text-6xl text-4xl font-bold text-center mb-8">plans for teams of all sizes</h2>
          <p class="font-light sm:text-xl font-comfort">
            We bring in relaxing experience at <b>affordable prices</b>,
          </p>
          <p class="mb-5 font-light sm:text-xl font-comfort">be it a Startup or a Large size company</p>
        </div>

        {/* LARGE SIZE */}
        <div class={` justify-center items-center space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0 `}>
          {/* <!-- Pricing Card --> */}
          {[
            {
              price: "₹2,500",
              priceDesc: "/day",
              options: [
                // "Therapist will be available for 8 hours",
                [
                  "Therapist will be available for ",
                  {
                    type: "semibold",
                    text: "8 hours",
                  },
                ],
                "Slot booking through app",
                "Support for both male and female therapist",
                [
                  "Session duration can be from ",
                  {
                    type: "semibold",
                    text: "15 to 25 minutes",
                  },
                ],
                [
                  "Number of slots per day can be from ",
                  {
                    type: "semibold",
                    text: "20 to 30",
                  },
                ],
              ],
              cta: "Contact us",
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 top-0 text-white pointer-events-none" viewBox="0 0 674 593.16" preserveAspectRatio="none">
                  <g data-name="Layer 2">
                    <path
                      d="M0 0v593.16h674V0zm654 568.27c-1.18 3.59-2.52 7.3-5.2 9.82-4.42 4.2-11.06 4-17 3.52a2318 2318 0 00-354.81.53c-74.32 5.81-149.72 15.15-222.82-.22-8.86-1.86-18-4.29-24.81-10.63-4.53-4.25-7.62-9.93-10.24-15.71C1.1 515.78 2.28 469.6 3.85 425.46L15.52 95.69c.76-21.35 2.11-44.44 15.08-60.79 0-29.64 127.62-24.53 144.75-25.57 77.54-4.75 155.39-9.48 232.77-2.44 38.56 3.51 76.94 9.94 115.64 10.57 19.83.32 39.79-.88 59.37 2.45S622.35 31.74 635 48c21.65 27.89 16.69 68.31 16.61 104.44-.09 40 7.26 79.51 11.47 119.25 4.42 41.65 5.38 83.62 6.34 125.52 1.27 57.57 2.39 116.62-15.42 171.06z"
                      fill="currentColor"
                      fillRule="evenodd"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
              ),
              bgColor: "bg-green-150",
            },
          ].map((plan) => (
            <div class={`flex flex-1 w-full flex-col p-6 mx-auto max-w-xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-12  relative ${plan.bgColor} `}>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold font-geomanist">{plan.price}</span>
                <span class=" font-comfort">{plan.priceDesc}</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                {plan.options.map((option) => (
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg class="flex-shrink-0 w-5 h-5 text-dark " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {typeof option === "string" ? (
                      <span className="font-comfort">{option}</span>
                    ) : (
                      <span>
                        {option.map((opt) => (
                          <>{typeof opt === "string" ? <span className="font-comfort">{opt}</span> : <span class="font-semibold font-geomanist">{opt.text}</span>}</>
                        ))}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div onClick={openCalendly} className="cursor-pointer w-52 self-center flex justify-center items-center lg:visible bg-black p-4 rounded-full ">
                <span className="text-white ml-4 text-lg font-geomanist tracking-wider">{plan.cta}</span>
              </div>
              {plan.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
