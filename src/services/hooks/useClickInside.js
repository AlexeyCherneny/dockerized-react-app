import { useEffect } from "react";

const useClickInside = (ref, cb) => {
  const handleClick = (e) => {
    if (ref && ref.current && ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });
};

export default useClickInside;
