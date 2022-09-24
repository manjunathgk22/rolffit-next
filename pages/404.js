import Script from "next/script";
import React from "react";

function Cstom404() {
  return (
    <Script id="redirect">
      {`
        document.location.href = '/';
      `}
    </Script>
  );
}

export default Cstom404;
