import { useEffect, useRef, useState } from "react";

const useHandleBanner = (bannerLength, delay = 3000) => {
  const [selected, setSelected] = useState(0);
  const timeoutRef = useRef(null);

  function incrementSelected() {
    if (selected < bannerLength) {
      setSelected(selected + 1);
    } else if (selected === bannerLength) {
      setSelected(0);
    }
    clearInterval(timeoutRef.current);
  }

  function decrementSelected() {
    if (selected > 0) {
      setSelected(selected - 1);
    } else if (selected === 0) {
      setSelected(bannerLength);
    }
    clearInterval(timeoutRef.current);
  }
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSelected((prev) => (prev === bannerLength ? 0 : prev + 1));
    }, delay);

    return () => resetTimeout();
  });

  return { selected, incrementSelected, decrementSelected, setSelected };
};

export default useHandleBanner;
