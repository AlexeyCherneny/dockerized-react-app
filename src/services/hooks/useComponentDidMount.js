import { useEffect } from "react";

const useComponentDidMount = (cb) => {
  useEffect(() => {
    cb();
  }, []);
};

export default useComponentDidMount;
