import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      //setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return <div>TIME: {time}</div>;
};

export default Stopwatch;
