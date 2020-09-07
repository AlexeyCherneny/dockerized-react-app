import { useEffect } from "react";

const useComponentUnMount = (cb) => {
  useEffect(() => {
    return cb;
  }, []);
};

export default useComponentUnMount;
