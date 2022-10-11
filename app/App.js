/* eslint-disable jsx-a11y/alt-text */
import Header from "./components/Header";
import Mission from "./components/Mission";
import Boxes from "./components/Boxes";
import HowItWorks from "./components/HowItWorks";
import { useEffect, useRef, useState } from "react";
import { FadeInWhenVisible } from "./Animate/FadeInWhenVisible";
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
// import anime from "./assets/images/logo_animation_black.gif";
import WhyWe from "./components/WhyWe";
import Stats from "./components/Stats";
import { BsFillTelephoneFill } from "react-icons/bs";
import colors from "tailwindcss/colors";
import ReactGA4 from "react-ga4";
import Clients from "./components/Clients";
import logEvent from "./util/util";

// const Header = lazy(() => "./components/Header");
// const Mission = lazy(() => import("./components/Mission"));
// const Info = lazy(() => import("./components/Info"));
// const Boxes = lazy(() => import("./components/Boxes"));
// const HowItWorks = lazy(() => import("./components/HowItWorks"));
// const WhyWe = lazy(() => import("./components/WhyWe"));
function App({ images }) {
  const [showanime, setshowanime] = useState(true);
  const contact = useRef(null);
  const contactlg = useRef(null);
  useEffect(() => {
    ReactGA4.send({ hitType: "pageview", page: window.location.pathname });
    logEvent({ action: "pageview" });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const gotocontact = () => {
    document.getElementById("contact")?.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const handleScroll = (event) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 7300 || scrollTop < 150) {
      // contact.current.style.height = "0px";
      contact.current.style.opacity = 0;
    } else {
      // contact.current.style.height = "auto";
      contact.current.style.opacity = 1;
    }
    if (scrollTop > 4742 || scrollTop < 150) {
      // contactlg.current.style.height = "0px";
      contactlg.current.style.opacity = 0;
    } else {
      // contactlg.current.style.height = "auto";
      contactlg.current.style.opacity = 1;
    }
  };
  return (
    <>
      <div className="overflow-visible " id="home">
        <div>
          <Header />
        </div>
        <main>
          <section id="clients">
            <Clients images={images} />
          </section>
          <section id="mission">
            <Mission />
          </section>

          <section id="whywedoit" style={{ background: "white" }}>
            <WhyWe />
          </section>
          <section>
            <Stats />
          </section>

          <section style={{ background: "white" }} id="benefits">
            <Boxes />
          </section>
          <section id="howitworks">
            <HowItWorks />
          </section>

          <section id="faq">
            <Accordion />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>

      <div onClick={gotocontact} ref={contact} className="lg:hidden contact-banner fixed bottom-0 left-0 w-screen p-3 bg-black flex z-30 justify-center items-center opacity-0">
        <BsFillTelephoneFill size={"1rem"} color={colors.white} /> <span className="text-white ml-4 text-lg font-geomanist tracking-wider ">Get FREE demo</span>
      </div>
      <div ref={contactlg} onClick={gotocontact} className="z-40 contact-float cursor-pointer invisible flex justify-center items-center lg:visible fixed bg-black p-4 bottom-4 right-4 rounded-full opacity-0">
        <BsFillTelephoneFill size={"1.25rem"} color={colors.white} /> <span className="text-white ml-4 text-lg font-geomanist tracking-wider">Get FREE demo</span>
      </div>
    </>
  );
}

export default App;
//  <motion.div
//   style={{ height: 300, width: 300, background: "red" }}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   transition={{ duration: 0.3 }}
//   variants={{
//     visible: { opacity: 1, scale: 1 },
//     hidden: { opacity: 0, scale: 0 },
//   }}
// />
