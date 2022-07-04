import React, { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
