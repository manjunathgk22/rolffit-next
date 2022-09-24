import React from "react";
import Checklist from "./Checklist/Checklist";
import Form from "./Form";
import Styles from "./Contact.module.css";
function Contact(props) {
  return (
    <div style={{ backgroundColor: "#f9f1e4" }} className={`${Styles.clipTop} relative`}>
      <div className="p-4 flex flex-wrap max-w-5xl mx-auto py-10 md:py-16 lg:py-21">
        <div className="text-4xl lg:text-6xl mb-12 font-bold text-center font-geomanist">bring in the most relaxing experience to build a happy workplace.</div>
        <div className="flex w-full lg:w-2/4">
          <Checklist />
        </div>
        <div className="flex w-full lg:w-2/4">
          <Form {...props} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
