import { useEffect, useState } from "react";

export default function useNumber() {
  const [isMobile, setMobile] = useState(null);

  const calculateIsMobile = () => {
    if (window.innerWidth <= 768) return setMobile(true);
    setMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calculateIsMobile);
    calculateIsMobile();
  }, []);

  return isMobile;
}
