import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Styles from "./Accordion.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Con1 from "../../public/images/con1.svg";
import Con2 from "../../public/images/con2.svg";
import Con3 from "../../public/images/con3.svg";
import Con4 from "../../public/images/con4.svg";
import Con5 from "../../public/images/con5.svg";
import Con6 from "../../public/images/con6.svg";
import Con7 from "../../public/images/con7.svg";
import Con8 from "../../public/images/con8.svg";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Accordion() {
  return (
    <AnimateSharedLayout>
      <div className="px-3 container m-auto">
        <div className="flex-col flex-wrap max-w-5xl mx-auto py-10 md:py-16 lg:py-21 justify-center">
          <div className="h5 sm:h4 md:h3 text-4xl lg:text-6xl font-bold mb-12 text-center font-geomanist">frequently asked questions</div>
          <div className="flex flex-wrap justify-center lg:justify-evenly">
            {items?.map((item) => (
              <img className="flex h-[250px] w-auto mt-12 basis-[33%]" src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className={`${Styles.li} border-b last:border-0 border-grey-alto mb-2 ${isOpen ? "bg-gray-100" : ""}`} onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      {/* <motion.div className="avatar" layout /> */}
      <div className="font-comfort flex justify-between items-center">
        <span className="text-xl">{item.title}</span>
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      <div>{isOpen && <Content item={item} />}</div>
    </motion.li>
  );
}

function Content({ item }) {
  return (
    <motion.div className="font-comfort mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {item.desc}
    </motion.div>
  );
}

const items = [
  {
    title: "Can I get a free trial for my office?",
    desc: "Yes, We provide 3 day free trial for our partners at their office premises",
    src: Con1.src,
  },
  {
    title: "Do I get privacy during the massage?",
    desc: "Our massage setup provides the required privacy to the employees. You do not need any removal of clothes to get the service. ",
    src: Con2.src,
  },
  {
    title: "What are the requirements to get a massage?",
    desc: "As an employee, you can approach the employer to get in touch with us for in-office massages. As an employer, you can con />nect with our team to get a free trial or book a service for your office",
    src: Con3.src,
  },
  {
    title: "How can I set up your massages in my office?",
    desc: "The employer can approach us directly for booking the massage services for their office.",
    src: Con4.src,
  },
  {
    title: "Are the therapists certified and licensed?",
    desc: "Yes, all our therapists are certified and licensed.",
    src: Con5.src,
  },
  {
    title: "Are the oils used in massage authentic?",
    desc: `No, we won't be using oils, every product used during the massage gets thorough our quality checks to ensure that only genuine products are used.`,
    src: Con6.src,
  },
  {
    title: "Does the massage work on headaches?",
    desc: "Yes, our therapeutic scalp therapy can reduce headaches.",
    src: Con7.src,
  },
  {
    title: "Can I choose the gender of the therapist?",
    desc: "You can avail the therapist of your choice present at your office.",
    src: Con8.src,
  },
];
