import { useRef, useEffect } from "react";

const useTimeout = (cb, delay) => {
  const savedCB = useRef(cb);

  useEffect(() => {
    savedCB.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => savedCB.current(delay);

    if (delay !== null) {
      const timerId = setTimeout(tick, delay);
      return () => clearTimeout(timerId);
    }
  }, [delay]);
};

export default useTimeout;
