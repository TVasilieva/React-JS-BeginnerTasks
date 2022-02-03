import React, { useEffect, useState } from "react";

import "./styles.scss";
import { ComponentProps } from "./types";

const date = new Date("July 16, 2018 05:35:05");

const initialHours = date.getHours();
const initialMinutes = date.getMinutes();
const initialSeconds = date.getSeconds();

const Timer: React.FC<ComponentProps> = () => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const [timer, setTimer] = useState(date);

  useEffect(() => {
    //Timers
    const hoursTimer = setTimeout(() => {
      setHours(hours - 1);
    }, 3600000);

    const minutesTimer = setTimeout(() => {
      setMinutes(minutes - 1);
    }, 60000);

    const secondsTimer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    const mainTimer = setTimeout(() => {
      setTimer(new Date(+timer - 1));
    }, 1000);

    //Condition
    if (!hours) clearTimeout(hoursTimer);
    if (!minutes) clearTimeout(minutesTimer);
    if (!seconds) clearTimeout(secondsTimer);
  }, [hours, minutes, seconds, timer]);

  const onTimerCompleted = (): void => {
    //!seconds && console.log("Boom!");
  };

  onTimerCompleted();

  return (
    <>
      <h1 className="timer">
        {hours} : {minutes} : {seconds}
      </h1>
      <h2 className="timer">{new Date(timer).toLocaleTimeString()}</h2>
    </>
  );
};

export default Timer;
