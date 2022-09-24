import React, { useEffect, useRef, useState } from "react";

import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import congratsanime from "../../public/images/congrats.gif";
import ReactGA4 from "react-ga4";
import logEvent from "../util/util";

const phoneRegex = `^[6-9]{1}[0-9]{9}$`;
function Form(props) {
  const gif = useRef(null);
  const [submitted, setsubmitted] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, seterrors] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
  });
  const validateForm = () => {
    let valid = true;
    if (!formData["name"]) {
      valid = false;
      seterrors((errors) => ({
        ...errors,
        name: "Cannot be empty",
      }));
    }
    if (!formData["companyName"]) {
      valid = false;
      seterrors((errors) => ({
        ...errors,
        companyName: "Cannot be empty",
      }));
    }
    if (!formData["email"]) {
      valid = false;
      seterrors((errors) => ({
        ...errors,
        email: "Cannot be empty",
      }));
    }
    if (typeof formData["email"] !== "undefined") {
      let lastAtPos = formData["email"].lastIndexOf("@");
      let lastDotPos = formData["email"].lastIndexOf(".");

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formData["email"].indexOf("@@") == -1 && lastDotPos > 2 && formData["email"].length - lastDotPos > 2)) {
        valid = false;
        seterrors((errors) => ({
          ...errors,
          email: "Email is not valid",
        }));
      }
    }
    if (!formData["phoneNumber"]) {
      valid = false;
      seterrors({
        ...errors,
        phoneNumber: "Cannot be empty",
      });
    }
    // if (!formData["phoneNumber"].match(phoneRegex)) {
    //   valid = false;
    //   seterrors({
    //     ...errors,
    //     phoneNumber: "Phone number is not valid",
    //   });
    // }
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setsubmitted(true);
    try {
      await addDoc(collection(db, "responses"), formData);
    } catch (err) {
      // alert(err);
    }
    logEvent({ action: "FORM_SUBMIT" });
  };
  const setValue = ({ target, key }) => {
    seterrors({
      name: "",
      companyName: "",
      email: "",
      phoneNumber: "",
    });
    setformData({
      ...formData,
      [key]: target.value,
    });
  };
  return (
    <div data-v-92f136c4="" data-v-f5337e4e="" className="MultiStepForm__wrapper w-full mt-8 sm:mt-0">
      {/* <img data-v-92f136c4="" data-src="/_nuxt/img/gradient-form-background.183a1bd.png" className="form-bg lazyloaded" src={bg} /> */}
      <div data-v-92f136c4="" className="form-content w-full bg-[#72717A] px-12 flex items-center justify-center relative">
        {submitted ? (
          <div className="w-full h-full flex justify-center items-center">
            <img ref={gif} src={congratsanime.src} alt="animation gif" />
          </div>
        ) : (
          <form className="">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 ">
                <input value={formData.name} onChange={({ target }) => setValue({ target, key: "name" })} className="font-comfort appearance-none rounded block w-full bg-white text-gray-700 borderrounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
                <span className="text-sm text-rose-500">{errors.name}</span>
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full px-3 mb-6 ">
                <input value={formData.companyName} onChange={({ target }) => setValue({ target, key: "companyName" })} className="font-comfort appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Company name" />
                <span className="text-sm text-rose-500">{errors.companyName}</span>
              </div>

              <div className="w-full px-3 mb-6 ">
                <input value={formData.email} onChange={({ target }) => setValue({ target, key: "email" })} className="font-comfort appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email id" />
                <span className="text-sm text-rose-500">{errors.email}</span>
              </div>
              <div className="w-full px-3 mb-6 ">
                <input value={formData.phoneNumber} onChange={({ target }) => setValue({ target, key: "phoneNumber" })} className="font-comfort appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="Phone number" />
                <span className="text-sm text-rose-500">{errors.phoneNumber}</span>
              </div>
              <button onClick={handleSubmit} className="mx-3 hover:font-bold transition-all text-lg w-full shadow-lg  mt-4 border-white  border-4  bg-white  text-black  py-1 rounded font-geomanist" type="button">
                Request callback
              </button>
            </div>
          </form>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" className="wheatsvg w-full h-full absolute left-0 bottom-0 text-white pointer-events-none" viewBox="0 0 331 227.75" preserveAspectRatio="none">
          <g data-name="Layer 2">
            <path d="M0 0v227.75h331V0zm327.84 91.68l-4.41 108.06c-.19 4.75-.52 9.79-4.34 13.73-6.55 6.74-20.15 7.48-31.84 7.55-80.58.5-159.11 10.38-239.7 2.13-9.84-1-20.13-2.35-27.78-6.77C8 209.56 5.94 197.68 5 187A820.94 820.94 0 017.68 17.88c.51-4.25 1.37-9 6-11.74C17.31 4 22.3 3.56 27 3.2c85.55-6.6 171.27 7.72 257.09 3.2 8.42-.44 17.34-.81 24.83 1.89C322 13 325.42 24.68 326.7 34.85c3.23 25.49 2.19 31.25 1.14 56.83z" fill="currentColor" fillRule="evenodd" data-name="Layer 1"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Form;
