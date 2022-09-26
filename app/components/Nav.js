/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"; // import state
import logo from "../../public/images/logo_with_description.png";
import logEvent from "../util/util";
import Styles from "./Header.module.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const gotoHome = () => {
    document.getElementById("home")?.scrollIntoView({ block: "start", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_GOTOHOME" });
  };
  const gotohowitwors = () => {
    document.getElementById("howitworks")?.scrollIntoView({ block: "end", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_HOWITWORKS" });
  };
  const gotocontact = () => {
    document.getElementById("contact")?.scrollIntoView({ block: "start", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_FREEDEMO" });
  };
  const gotofaq = () => {
    document.getElementById("faq")?.scrollIntoView({ block: "start", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_GOTOFAQ" });
  };
  const gotbenefits = () => {
    document.getElementById("benefits")?.scrollIntoView({ block: "start", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_GOTOBENEFITS" });
  };
  const gotoHealth = () => {
    document.getElementById("whywedoit")?.scrollIntoView({ block: "start", behavior: "smooth" });
    setIsNavOpen(false);
    logEvent({ action: "CLICK_ON_GOTOHEALTH" });
  };
  return (
    <div className=" z-40 flex items-center justify-between grow py-8 lg:justify-center lg:items-center">
      <a href="/">
        <img src={logo.src}  className={`${Styles.whitesvg} h-auto absolute top-10 left-0 -mt-8 lg:mt-0 ${Styles.whitesvg}`} />
      </a>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-1 bg-black h-[46px] w-[46px] flex items-center justify-center fixed right-8 top-6 flex-col rounded-full"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </div>
        <AnimatePresence>
          {isNavOpen ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} z-40`}>
              {" "}
              <div
                className="CROSS-ICON flex self-end justify-end top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex px-8 flex-col items-center justify-between min-h-[250px]">
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotoHome}>
                    home
                  </a>
                </li>
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotohowitwors}>
                    how it works
                  </a>
                </li>
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotoHealth}>
                    mental health
                  </a>
                </li>
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotbenefits}>
                    benefits
                  </a>
                </li>
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotofaq}>
                    faqs
                  </a>
                </li>
                <li className="w-full mb-8">
                  <a className="text-black font-geomanist text-4xl relative font-bold" onClick={gotocontact}>
                    contact
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <ul className="DESKTOP-MENU hidden space-x-8 lg:flex grow justify-end mr-8">
        {/* <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotoHome}>
            home
          </a>
        </li> */}
        <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotohowitwors}>
            how it works
          </a>
        </li>
        <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotoHealth}>
            mental health
          </a>
        </li>
        <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotbenefits}>
            benefits
          </a>
        </li>
        <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotofaq}>
            faqs
          </a>
        </li>
        <li className=" mb-8">
          <a className="text-white cursor-pointer text-4xl lg:text-lg relative font-bold" onClick={gotocontact}>
            contact
          </a>
        </li>
      </ul>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        position: fixed;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
