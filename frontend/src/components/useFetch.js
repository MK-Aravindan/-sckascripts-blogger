import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, [url]);

  return { blogs, isPending };
};

export default UseFetch;
