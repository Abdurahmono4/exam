import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Network response was not ok");
        }
        const response = await req.json();
        setData(response);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
        console.error(err.message);
      }
    };

    getData();
  }, [url]);

  return { data, isPending, error };
}
export default useFetch;
