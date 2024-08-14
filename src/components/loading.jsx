import { useEffect, useState } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <img
        className="loading"
        src="https://i.gifer.com/WMDx.gif"
        alt="loading-gif"
      />
    );
  }

  return <p>Data Loaded!</p>;
}

export default Loading;
