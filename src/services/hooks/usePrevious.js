import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;
  });

  return prevValue.current;
};

export default usePrevious;
