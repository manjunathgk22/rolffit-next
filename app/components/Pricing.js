/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useRef } from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  const ref = useRef(null);

  const handleClick = () => {
    if (!ref) return;
    console.log(ref.current);
    if (ref.current.classList.contains("left-[105px]")) {
      ref.current.classList.remove("left-[105px]");
      ref.current.classList.add("left-1");
    } else {
      ref.current.classList.remove("left-1");
      ref.current.classList.add("left-[105px]");
    }
  };

  useEffect(() => {}, []);

  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for business teams like yours</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div class="mx-auto shadow self-center w-56  rounded-full h-10 my-4 flex p-1 relative items-center">
          <div class="w-full flex justify-center">
            <button onClick={handleClick}>Left</button>
          </div>
          <div class="w-full flex justify-center">
            <button onClick={handleClick}>Right</button>
          </div>
          <span ref={ref} class="elSwitch bg-indigo-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1 ">
            Text
          </span>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          {[
            {
              title: "Starter",
              desc: "Best option for personal use & for your next project.",
              price: "$29",
              priceDesc: "/month",
              options: [
                "Individual configuration",
                "No setup, or hidden fees",
                [
                  "Team size:",
                  {
                    type: "semibold",
                    text: "1 developer",
                  },
                ],
                [
                  "Premium support:",
                  {
                    type: "semibold",
                    text: "6 months",
                  },
                ],
                [
                  "Free updates:",
                  {
                    type: "semibold",
                    text: "24 months",
                  },
                ],
              ],
              cta: "Get started",
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
              bgColor: "bg-blue-150",
            },
            {
              title: "Starter",
              desc: "Best option for personal use & for your next project.",
              price: "$29",
              priceDesc: "/month",
              options: [
                "Individual configuration",
                "No setup, or hidden fees",
                [
                  "Team size:",
                  {
                    type: "semibold",
                    text: "1 developer",
                  },
                ],
                [
                  "Premium support:",
                  {
                    type: "semibold",
                    text: "6 months",
                  },
                ],
                [
                  "Free updates:",
                  {
                    type: "semibold",
                    text: "24 months",
                  },
                ],
              ],
              cta: "Get started",
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
                  <g data-name="Layer 2">
                    <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
                  </g>
                </svg>
              ),
              bgColor: "bg-pink-150",
            },
            {
              title: "Starter",
              desc: "Best option for personal use & for your next project.",
              price: "$29",
              priceDesc: "/month",
              options: [
                "Individual configuration",
                "No setup, or hidden fees",
                [
                  "Team size:",
                  {
                    type: "semibold",
                    text: "1 developer",
                  },
                ],
                [
                  "Premium support:",
                  {
                    type: "semibold",
                    text: "6 months",
                  },
                ],
                [
                  "Free updates:",
                  {
                    type: "semibold",
                    text: "24 months",
                  },
                ],
              ],
              cta: "Get started",
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
            <div class={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8  relative ${plan.bgColor} `}>
              <h3 class="mb-4 text-2xl font-semibold font-geomanist ">{plan.title}</h3>
              <p class="font-light  sm:text-lg font-comfort">{plan.desc}</p>
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
                          <>{typeof opt === "string" ? opt : <span class="font-semibold font-geomanist">{opt.text}</span>}</>
                        ))}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="cursor-pointer w-52 self-center flex justify-center items-center lg:visible bg-black p-4 rounded-full ">
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
