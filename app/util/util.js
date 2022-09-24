import ReactGA4 from "react-ga4";

const logEvent = ({ action }) => {
  try {
    ReactGA4.event({
      category: "EVENTS",
      action: action,
    });
  } catch (error) {
    console.log(error);
  }
};

export default logEvent;
