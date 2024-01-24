import React, { useDeferredValue, useEffect, useState } from "react";
import styles from "./DigitalClock.module.css";

export default function DigitalClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = hours < 12 ? "AM" : "PM";

    hours = hours < 12 ? hours : hours - 12;

    return `${padZero(hours)}:${padZero(minites)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number: number) {
    return (number < 10 ? "0" : "") + `${number}`;
  }

  return (
    <div className={styles.clockCont}>
      <span className={styles.clock}>{formatTime()}</span>
    </div>
  );
}
