import { useLayoutEffect, useState } from "react";
import { mobileAndTabletCheck } from "../app/util/device";

function useCheckDevice() {
  const [isMobile, setisMobile] = useState(false);
  useLayoutEffect(() => {
    function update() {
      setisMobile(mobileAndTabletCheck());
    }

    window.addEventListener("resize", update);
    update();

    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
}

export default useCheckDevice;
