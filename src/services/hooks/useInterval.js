import { useRef, useEffect } from "react";

const useInterval = (cb, delay) => {
  const savedCB = useRef(cb);

  useEffect(() => {
    savedCB.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => savedCB.current(delay);

    if (delay !== null) {
      const timerId = setInterval(tick, delay);
      return () => clearInterval(timerId);
    }
  }, [delay]);
};

export default useInterval;
