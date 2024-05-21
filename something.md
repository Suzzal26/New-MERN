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


//
import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(13140000);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  // Helper function to convert seconds into months, days, hours, minutes, and seconds
  const formatTime = (seconds) => {
    const months = Math.floor(seconds / (30 * 24 * 60 * 60));
    seconds %= 30 * 24 * 60 * 60;
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    
    return { months, days, hours, minutes, seconds };
  };

  const { months, days, hours, minutes, seconds } = formatTime(count);

  return (
    <div>
      {months} months, {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </div>
  );
};

export default Test;


