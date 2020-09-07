import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setResponse(data);
      } catch (err) {
        setError(err);
      }

      return { response, error };
    };

    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;
