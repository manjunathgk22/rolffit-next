import React from "react";
import Styles from "./Boxes.module.css";
import relief from "../../public/images/fatigue.png";
import absenteeism from "../../public/images/absentism.png";
import byestress from "../../public/images/byestress.png";
import ewellness from "../../public/images/ewellness.png";
import healthyculture from "../../public/images/healthyculture.png";
import motivatedwf from "../../public/images/motivatedwf.png";
import positiveenergy from "../../public/images/positiveenergy.png";
import retention from "../../public/images/retention.png";

const data = [
  {
    title: "positive energy",
    desc: "Reenergize employees with massage therapy to bring more enthusiasm for work",
    image: positiveenergy.src,
  },
  {
    title: "boost employee retention",
    desc: "Retain the best talent with on-time relaxations through head massages",
    image: retention.src,
  },

  {
    title: "lower absenteeism",
    desc: "In-office head massages make employees look forward to coming back to work.",
    image: absenteeism.src,
  },
  {
    title: "employee wellness",
    desc: "Promote good health by strengthening immunity and lowering blood pressure with therapies",
    image: ewellness.src,
  },

  {
    title: "motivated workforce",
    desc: "Employees without stress build the most motivated workforce",
    image: motivatedwf.src,
  },
  {
    title: "healthy work culture",
    desc: "Happier employees love to engage and actively participate in building a healthy work environment.",
    image: healthyculture.src,
  },
  {
    title: "relief from physical fatigue",
    desc: "Massage stimulates blood flow to reduce chronic neck pains and muscle stiffness",
    image: relief.src,
  },
  {
    title: "bye-bye stress and anxiety",
    desc: "Lower stress hormones with the right therapy to enjoy stress-free work life",
    image: byestress.src,
  },
];
function Boxes() {
  return (
    <div className="container m-auto boxes-container">
      <div className="px-4 py-3 text-4xl max-w-5xl mx-auto lg:text-6xl mb-0 font-bold text-center font-geomanist ">lift the spirits and goodwill of your employees</div>
      <div className="flex gap-[20px] px-4 flex-wrap max-w-5xl mx-auto py-8 md:py-12 justify-around">
        {data.map((item, i) => (
          <div key={i} className="px-3 py-3 justify-center items-start lg:mb-12 mb-6 relative basis-full md:basis-[calc(33%-20px)] items-center rounded overflow-hidden flex">
            <div>
              <div>
                <img className="w-auto lg:h-40 h-28 m-auto " src={item.image} />
              </div>
              <div className="flex justify-center flex-col mt-4 lg:mt-8">
                <div className="text-center font-geomanist text-xl lg:text-2xl">{item.title}</div>
                <div className="font-comfort text-center mt-2">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boxes;
