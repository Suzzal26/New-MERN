import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(13140000);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return <div>{count}</div>;
};

export default Timer;
